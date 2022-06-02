import $ from 'jquery';
import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';

var translations = {
    en: {
        translation: {
            nav: {
                languageSelector: {
                    text: 'En'
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
            nav: {
                languageSelector: {
                    text: 'Ru'
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
    $("body").localize();
}