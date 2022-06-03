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
                },
                expandCollapse: {
                    title: 'Show / Hide navigation'
                }
            },
            content: {
                aboutMe: {
                    header: 'About me',
                    text: 'Good day!\n\nMy name is Andrey Ponomarev, I am a Full stack .NET developer from Moscow.\n\nFor more than 6 years I have been engaged in commercial software development using the ASP.NET MVC and Javascript technology stack.\nI love complex technical tasks, project management from start to end, analytics and elaboration of requirements for the product being developed.\n\nIn my free time I like to engage in self-education, expanding and deepening my professional skills, as well as sports.'
                },
                skills: {
                    header: 'Skills',
                    angularJsProgressText: '90% (4 years)',
                    angularProgressText: '80% (2 years)',
                    csharpProgressText: '90% (more than 6 years)',
                    netCoreProgressText: '80% (more than 6 years)'
                },
                experience: {
                    header: 'Work experience',
                    visiology: {
                        companyName: 'Visiology Limited',
                        position: 'Senior .Net developer - March 2014 - present'
                    },
                    polymedia: {
                        companyName: 'Polymedia JSC',
                        position: 'C ++ developer - August 2010 - March 2014'
                    }
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
                },
                expandCollapse: {
                    title: 'Показать / Cкрыть навигацию'
                }
            },
            content: {
                aboutMe: {
                    header: 'Обо мне',
                    text: 'Доброго времени суток!\n\nМеня зовут Андрей Пономарев, я Full stack .NET разработчик из Москвы.\n\nБолее 6 лет я занимаюсь коммерческой разработкой ПО с использованием стека технологий ASP.NET MVC и Javascript.\nЛюблю сложные технические задачи, ведение проекта от начала и до конца, аналитику и проработку требований к разрабатываемому продукту.\n\nВ свободное время люблю заниматься самообразованием, расширением и углублением своих проффесиональных навыков, а также спортом.'
                },
                skills: {
                    header: 'Навыки',
                    angularJsProgressText: '90% (4 года)',
                    angularProgressText: '80% (2 года)',
                    csharpProgressText: '90% (более 6 лет)',
                    netCoreProgressText: '80% (более 6 лет)'
                },
                experience: {
                    header: 'Опыт работы',
                    visiology: {
                        companyName: 'ООО Visiology',
                        position: 'Senior .Net developer - Март 2014 - по настоящее время'
                    },
                    polymedia: {
                        companyName: 'ЗАО Polymedia',
                        position: 'C++ developer - Август 2010 - Март 2014'
                    }
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