import React, { useEffect, useState, useRef } from 'react';

export const Chatbot = () => {
    const [bot, setBot] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const bot = new window.RiveScript();

        let brainPath;
        // Check if we are in development mode (Vite uses import.meta.env.DEV)
        // and if your app is NOT running from a subpath in development
        if (import.meta.env.DEV && window.location.pathname === '/') {
            // In local development, if your app runs from root, use absolute path relative to root
            brainPath = '/brain/brain.rive';
        } else {
            // For production build (and if dev server is running from a subpath)
            // use BASE_URL which will include the subpath (e.g., /CsongorCv/)
            brainPath = `${import.meta.env.BASE_URL}brain/brain.rive`;
        }


        console.log("Loading RiveScript from:", brainPath);

        bot.loadFile(brainPath).then(() => {
            bot.sortReplies();
            setBot(bot);
            setMessages([
                { sender: 'bot', text: "Hey there! This is a little CV assistant(currently only Enlish). Ask me things about my: education, skills, projects." },
            ]);
            setLoading(false);
        }).catch(err => {
            console.error("Failed to load bot:", err);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!loading) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, loading]);

    const handleSend = async () => {
        if (!input.trim() || !bot) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        try {
            const reply = await bot.reply("local-user", input);
            const botMessage = { sender: 'bot', text: reply };
            setMessages(prev => [...prev, botMessage]);
        } catch (err) {
            console.error("Bot reply error:", err);
            setMessages(prev => [...prev, { sender: 'bot', text: "Oops, something went wrong." }]);
        }

        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition"
                onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? 'Close Chat' : 'Ask Me'}
            </button>

            {isOpen && (
                <div className="mt-3 w-80 h-96 bg-zinc-900 text-white rounded-lg shadow-2xl flex flex-col border border-white/10">
                    <div className="bg-zinc-800 px-4 py-2 rounded-t-lg text-sm font-semibold">
                        🤖 CV Assistant
                    </div>

                    {loading ? (
                        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                            Loading assistant...
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`text-sm p-2 rounded ${
                                            msg.sender === 'user'
                                                ? 'bg-red-500/20 text-red-300 self-end ml-auto max-w-[70%]'
                                                : 'bg-white/10 text-white max-w-[80%]'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-2 border-t border-white/10">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about my work..."
                                    className="w-full bg-white/5 px-3 py-2 rounded text-white placeholder-gray-400 focus:outline-none"
                                />
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};