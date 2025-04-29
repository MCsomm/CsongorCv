import React from 'react';
import { useTranslation } from 'react-i18next';
import { RevealOnScroll } from '../RevealOnScroll.jsx';

export const About = () => {
    const { t } = useTranslation();

    const frontendSkills = ['React', 'Javascript', 'TailwindCSS', 'Sass'];
    const backendSkills = ['Python', 'PHP', 'SQL(MySQL)', 'Yii 2', 'GO'];
    const otherSkills = ['Git', 'UE4+', 'Blender'];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent text-center">
                        {t('aboutMe')}
                    </h2>
                    <div className="rounded-xl p-10 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            {t('about.intro')}
                        </p>
                        {/* Main grid for Frontend, Backend, and Other Skills */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Frontend Section */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">{t('about.frontend')}</h3>
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
                                <h3 className="text-xl font-bold mb-4">{t('about.backend')}</h3>
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
                                <h3 className="text-xl font-bold mb-4">{t('about.otherSkills')}</h3>
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
                    {/* Education and Work Experience Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> {t('about.educationTitle')} </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>{t('about.mastersTitle')}</strong>
                                    <br />
                                    {t('about.universityNameMA')} ({t('about.mastersDuration')})
                                </li>
                                <li>
                                    <strong>{t('about.bachelorsTitle')}</strong>
                                    <br />
                                    {t('about.universityNameBA')} ({t('about.bachelorsDuration')})
                                    <br />
                                </li>
                            </ul>
                            <h3 className="text-xl font-bold mt-6 mb-4"> {t('about.publicationTitle')} </h3>
                            <p className="text-gray-300">
                                {t('about.publicationText')}
                                <br />
                                <a
                                    href="https://www.itajournal.com/index.php/ita/issue/view/30/28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 py-2 px-4 bg-red-500 text-white rounded-lg text-center hover:bg-red-600 transition duration-300"
                                >
                                    {t('about.viewPublication')}
                                </a>
                            </p>
                        </div>

                        {/* Work Experience Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> {t('about.workExperienceTitle')} </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">{t('about.work1Title')}</h4>
                                    <p>
                                        {t('about.work1Date')}
                                        <br />
                                        • {t('about.work1Description1')}
                                        <br />
                                        • {t('about.work1Description2')}
                                        <br />
                                        • {t('about.work1Description3')}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">{t('about.work2Title')}</h4>
                                    <p>
                                        {t('about.work2Date')}
                                        <br />
                                        • {t('about.work2Description1')}
                                        <br />
                                        • {t('about.work2Description2')}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">{t('about.work3Title')}</h4>
                                    <p>
                                        {t('about.work3Date')}
                                        <br />
                                        • {t('about.work3Description1')}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">{t('about.work4Title')}</h4>
                                    <p>
                                        {t('about.work4Date')}
                                        <br />
                                        • {t('about.work4Description1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};