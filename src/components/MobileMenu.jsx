import React from 'react';
import { useTranslation } from 'react-i18next';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setMenuOpen(false); // Close the menu after changing language
    };

    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         ${menuOpen ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"}
                      `}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label={t('mobileMenu.closeMenu')}
            >
                &times;
            </button>
            <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t('mobileMenu.home')}
            </a>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t('mobileMenu.about')}
            </a>
            <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t('mobileMenu.projects')}
            </a>
            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
                {t('mobileMenu.contact')}
            </a>

            {/* Language Switcher Buttons for Mobile */}
            <div className="flex items-center space-x-4 mt-8">
                <button
                    onClick={() => changeLanguage('en')}
                    className={`text-lg font-semibold text-gray-300 hover:text-white transition-colors
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    ENG
                </button>
                <button
                    onClick={() => changeLanguage('sk')}
                    className={`text-lg font-semibold text-gray-300 hover:text-white transition-colors
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    SK
                </button>
                <button
                    onClick={() => changeLanguage('hu')}
                    className={`text-lg font-semibold text-gray-300 hover:text-white transition-colors
                                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    HUN
                </button>
            </div>
        </div>
    );
};