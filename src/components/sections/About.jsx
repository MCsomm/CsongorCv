import {RevealOnScroll} from "../RevealOnScroll.jsx";
export const About = () => {

    const frontendSkills = ["React", "Javascript", "TailwindCSS","Sass"];
    const backendSkills = ["Python", "PHP", "SQL(MySQL)","Yii 2", "GO"];
    const otherSkills = ["Git", "UE4+", "Blender"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-6">  {/* Increased width and padding */}
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>
                <div className="rounded-xl p-10 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable
                        web applications and creating innovative solutions.
                    </p>
                    {/* Main grid for Frontend, Backend, and Other Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Frontend Section */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Backend Section */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Other Skills Section */}
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Applied Informatics Master's</strong><br/> Pan-European University(BA)
                                (2022-2024)
                            </li>
                            <li>
                                <strong>Applied Informatics Bachelor's</strong><br/> Pan-European University(BA)
                                (2019-2022)<br/>
                            </li>
                            <h3 className="text-xl font-bold mb-4"> 📰 Publication </h3>
                            <li>
                                “Using Motion Capture Systems to Create Virtual Reality Scenes” <br/>
                                Published in International Journal of Information Technology Applications, Volume 13, Issue 1, July 2024, Page 35.<br/>
                                <a
                                 href="https://www.itajournal.com/index.php/ita/issue/view/30/28"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                   className="inline-block mt-2 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                                >
                                    View Publication
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 👨‍💻 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Web Administrator, Auto-Kovo, s.r.o</h4>
                                <p>June 2024– Present<br/>
                                    •
                                    Development and management of web solutions based on PrestaShop, Elementor, and WordPress.<br/>
                                    •
                                    Website performance monitoring and troubleshooting technical issues.<br/>
                                    •
                                    Database configuration and management.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Frontend Developer, Energofish s.r.o.</h4>
                                <p>August 2019 – February 2020<br/>
                                    •
                                    Creation, modification, and optimization of single-page applications using React.<br/>
                                    •
                                    Administration, updates, and enhancement of website functionality</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Web Administrator, Fuji Foto DS</h4>
                                <p>June 2018 – October 2018<br/>
                                    •
                                    Website administration and content updates.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Web Administrator, Auto-kovo, s.r.o</h4>
                                <p>October 2017 – May 2024<br/>
                                    •
                                    Summer internship/weekend work during studies – website management and maintenance.</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </RevealOnScroll>
        </section>
    );
}