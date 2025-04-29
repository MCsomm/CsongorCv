import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const renderName = () => {
        if (currentLanguage === 'sk') {
            return 'Csongor Mészáros';
        } else {
            return 'Mészáros Csongor';
        }
    };

    return (
        <section
            id={"home"}
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="textont-bo-5xl md:text-7xl fld mb-6 bg-gradient-to-r from-red-500 to-indigo-700
             bg-clip-text text-transparent leading-tight md:leading-normal">
                        {renderName()}
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        {t("home.intro")}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-red-500 text-white py-3 px-6 rounded
               transition relative overflow-hidden hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                        >
                            {t("home.viewProjects")}
                        </a>
                        <a
                            href="#contact"
                            className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200
                 hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-500/10"
                        >
                            {t("home.contactMe")}
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};