import $ from 'jquery';
import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';

var translations = {
    en: {
        translation: {
            'about-me': 'About me',
            nav: {
                languageSelector: {
                    text: 'En'
                }
            }
        }
    },
    ru: {
        translation: {
            'about-me': 'Обо мне',
            nav: {
                languageSelector: {
                    text: 'Ru'
                }
            }
        }
    }
};

export function init() {
    i18next.init({
        lng: 'ru',
        resources: translations
    });

    jqueryI18next.init(i18next, $);

    $('#languageList a').on('click', function () {
        var locale = $(this).data('locale');

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