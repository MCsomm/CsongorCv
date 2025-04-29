import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com';
import {useState} from "react";
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VIT_SERVICE_ID,
                import.meta.env.VIT_TEMPLATE_ID,
                e.target,
                import.meta.env.VIT_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert(t('contact.sendMessageSuccess')); // Add this translation later if needed
                setFormData({name: "", email: "", message: ""});
            }).catch(() => alert(t('contact.sendMessageError'))); // Add this translation later if needed
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent text-center">
                        {t('contact.title')}
                    </h2>
                    <form className=" space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded
                                   px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                                placeholder={t('contact.namePlaceholder')}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded
                                   px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                                placeholder={t('contact.emailPlaceholder')}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded
                                   px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
                                placeholder={t('contact.messagePlaceholder')}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>
                        <button type="submit" className="w-full bg-red-500 text white py-3 px-6 rounded font-medium transition relative
                                overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)]">
                            {t('contact.sendMessageButton')}
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};