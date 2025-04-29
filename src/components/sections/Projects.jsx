import {RevealOnScroll} from "../RevealOnScroll.jsx";
import { useTranslation } from 'react-i18next';

export const Projects = () => {
    const { t } = useTranslation();

    return(
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className=" max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent text-center">
                        {t('projects.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                            <h3 className="text-xl font-bold mb-2">{t('projects.movieTicketBookingTitle')}</h3>
                            <p className="text-gray-400 mb-4">
                                {t('projects.movieTicketBookingDescription')}
                            </p>
                            <div>
                                {["Yii2","PHP","HTML","CSS","Javascript","MySQL"].map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="https://github.com/MCsomm/Movie-Ticket-Buying"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                                >
                                    {t('projects.viewProjectButton')}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                            <h3 className="text-xl font-bold mb-2">{t('projects.movieFinderTitle')}</h3>
                            <p className="text-gray-400 mb-4">
                                {t('projects.movieFinderDescription')}
                            </p>
                            <div>
                                {["React","HTML","JS(Fetch API)","TailwindCSS"].map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="https://github.com/MCsomm/Movie-Search"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                                >
                                    {t('projects.viewProjectButton')}
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition-all">
                            <h3 className="text-xl font-bold mb-2">{t('projects.allergyAppTitle')}</h3>
                            <p className="text-gray-400 mb-4">
                                {t('projects.allergyAppDescription')}
                            </p>
                            <div>
                                {["React","HTML","HTML","TailwindCSS","JS(Fetch API)"].map((tech,key) => (
                                    <span
                                        key={key}
                                        className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                    hover:shadow-[0_2px_8px_rgba(239, 68, 68, 0.4)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                                >
                                    {t('projects.underDevelopment')}
                                </a>
                            </div>
                        </div>
                        {/*<div className="flex-1 flex justify-center items-center">
                      <img
                          src="/PHP.png"
                          alt="Project Screenshot"
                          className="rounded-lg shadow-lg object-cover max-h-70"
                      />
                  </div>*/}

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}