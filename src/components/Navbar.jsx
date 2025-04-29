import React, { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languageButtonStyle = (lng) => {
        const baseStyle = "text-gray-300 hover:text-white cursor-pointer transition-colors";
        return lng === currentLanguage ? `${baseStyle} font-semibold` : baseStyle;
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10 ,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        <Trans i18nKey="csongorCv">
                            Csongor<span className="text-red-500">.Cv</span>
                        </Trans>
                    </a>

                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className=" text-grey-300 hover:text-white transition-colors">
                            {t('mobileMenu.home')}
                        </a>
                        <a href="#about" className=" text-grey-300 hover:text-white transition-colors">
                            {t('mobileMenu.about')}
                        </a>
                        <a href="#projects" className=" text-grey-300 hover:text-white transition-colors">
                            {t('mobileMenu.projects')}
                        </a>
                        <a href="#contact" className=" text-grey-300 hover:text-white transition-colors">
                            {t('mobileMenu.contact')}
                        </a>
                        {/* Language Switcher Buttons */}
                        <div className="flex items-center space-x-2">
                            <button onClick={() => changeLanguage('en')} className={languageButtonStyle('en')}>ENG</button>
                            <button onClick={() => changeLanguage('sk')} className={languageButtonStyle('sk')}>SK</button>
                            <button onClick={() => changeLanguage('hu')} className={languageButtonStyle('hu')}>HUN</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};