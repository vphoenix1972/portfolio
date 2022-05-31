import $ from 'jquery';
import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';

var translations = {
    en: {
        translation: {
            'about-me': 'About me'
        }
    },
    ru: {
        translation: {
            'about-me': 'Обо мне'
        }
    }
};

export function init() {
    i18next.init({
        lng: 'ru',
        resources: translations
    });

    jqueryI18next.init(i18next, $);

    translatePage();
}

export function changeLanguage(locale) {
    i18next.changeLanguage(locale).then(function () {
        translatePage();
    });
}

function translatePage() {
    $("body").localize();
}