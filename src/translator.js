import $ from 'jquery';
import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';

var translations = {
    en: {
        translation: {
            pageTitle: 'Portfolio of Andrey Ponomarev',
            sidebar: {
                name: 'Andrey Ponomarev',
                navLinks: {
                    aboutMe: 'About me',
                    skills: 'Skills',
                    experience: 'Work experience',
                    portfolio: 'Portfolio',
                    education: 'Education',
                    contacts: 'Contacts'
                }
            },
            content: {
                aboutMe: {
                    header: 'About me'
                }
            }
        }
    },
    ru: {
        translation: {
            pageTitle: 'Портфолио Андрея Пономарева',
            sidebar: {
                name: 'Андрей Пономарев',
                navLinks: {
                    aboutMe: 'Обо мне',
                    skills: 'Навыки',
                    experience: 'Опыт работы',
                    portfolio: 'Портфолио',
                    education: 'Образование',
                    contacts: 'Контакты'
                }
            },
            content: {
                aboutMe: {
                    header: 'Обо мне'
                }
            }
        }
    }
};

export function init() {
    i18next.init({
        lng: 'en',
        resources: translations
    });

    jqueryI18next.init(i18next, $);

    $('#languageSelect').on('change', function () {
        var locale = this.value;

        changeLanguage(locale);
    });

    translatePage();
}

function changeLanguage(locale) {
    i18next.changeLanguage(locale).then(function () {
        translatePage();
    });
}

function translatePage() {
    $("html").localize();
}