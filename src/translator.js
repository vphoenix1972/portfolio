import $ from 'jquery';
import i18next from 'i18next';
import jqueryI18next from 'jquery-i18next';

import './assets/viqube-admin_preview_ru.png';
import './assets/viqube-admin_1_ru.png';
import './assets/viqube-admin_2_ru.png';
import './assets/viqube-admin_3_ru.png';
import './assets/viqube-admin_4_ru.png';
import './assets/ssbi_preview_ru.png';
import './assets/ssbi_1_ru.png';
import './assets/ssbi_2_ru.png';
import './assets/ssbi_3_ru.png';
import './assets/ssbi_4_ru.png';
import './assets/export-import_preview_ru.png';
import './assets/export-import_1_ru.png';
import './assets/export-import_2_ru.png';
import './assets/export-import_3_ru.png';
import './assets/regular-reporting_preview_ru.png';
import './assets/regular-reporting_1_ru.png';
import './assets/regular-reporting_2_ru.png';
import './assets/regular-reporting_3_ru.png';

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
                    text: 'Good day!\n\nMy name is Andrey Ponomarev, I am a Senior .NET developer from Moscow.\n\nFor more than 6 years I have been engaged in commercial software development using the C#, .NET Core and Javascript technology stack.\nI love complex technical tasks, project management from start to end, system analytics and elaboration of requirements for the product being developed.\n\nIn my free time I like to engage in self-education, expanding and deepening my professional skills, as well as sports.'
                },
                skills: {
                    header: 'Skills',
                    angularJsProgressText: '4 years of experience',
                    angularProgressText: '2 years of experience',
                    csharpProgressText: 'more than 6 years of experience',
                    netCoreProgressText: 'more than 6 years of experience'
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
                },
                portfolio: {
                    header: 'Portfolio',
                    modal: {
                        previousImage: 'Previous',
                        nextImage: 'Next'
                    },
                    visiology3: {
                        card: {
                            title: 'Visiology Platform 3 - Formula Engine',
                            text: 'Formula Engine is a key component of the Visiology 3 platform, designed to execute DAX expressions in conjunction with the Clickhouse database.'
                        },
                        modal: {
                            title: 'Visiology Platform 3 - Formula Engine',
                            images: [
                                {
                                    caption: 'Formula Engine - an implementation of a backend for building charts based on DAX queries'
                                },
                                {
                                    caption: 'Formula Engine - an implementation of a parser and semantic analyzer for DAX expressions'
                                },
                                {
                                    caption: 'Formula Engine - an implementation of a backend for storing the data model (1) and the relationships between tables (2)'
                                },
                                {
                                    caption: 'Formula Engine - an example of parsing a DAX expression into a syntax tree'
                                },
                                {
                                    caption: 'Formula Engine - an implementation of a backend for storing and administering datasets'
                                },
                                {
                                    caption: 'Formula Engine - an implementation of a backend for storing and administering workspaces'
                                }
                            ]
                        }
                    },
                    viqubeAdmin: {
                        card: {
                            title: 'Visiology Platform - ViQube database administration system',
                            text: 'The administration system is designed to load data and configure the data scheme for the ViQube analytical database.',
                            previewSrc: 'assets/viqube-admin_preview_en.png'
                        },
                        modal: {
                            title: 'Visiology Platform - ViQube database administration system',
                            images: [
                                {
                                    src: 'assets/viqube-admin_1_en.png',
                                    caption: 'Scheduler settings page'
                                },
                                {
                                    src: 'assets/viqube-admin_2_en.png',
                                    caption: 'Data loader settings page'
                                },
                                {
                                    src: 'assets/viqube-admin_3_en.png',
                                    caption: 'Table columns editor page'
                                },
                                {
                                    src: 'assets/viqube-admin_4_en.png',
                                    caption: 'Access rights settings page'
                                }
                            ]
                        }
                    },
                    ssbi: {
                        card: {
                            title: 'Visiology Platform - Self-service analytics system',
                            text: 'The self-service analytics system is intended for simplified reporting based on data from the ViQube database.',
                            previewSrc: 'assets/ssbi_preview_en.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Self-service analytics system',
                            images: [
                                {
                                    src: 'assets/ssbi_1_en.png',
                                    caption: 'Main page - bar chart tab'
                                },
                                {
                                    src: 'assets/ssbi_2_en.png',
                                    caption: 'Window for applying filters from chart data'
                                },
                                {
                                    src: 'assets/ssbi_3_en.png',
                                    caption: 'Data filter settings window'
                                },
                                {
                                    src: 'assets/ssbi_4_en.png',
                                    caption: 'Home page - map tab'
                                }
                            ]
                        }
                    },
                    exportImport: {
                        card: {
                            title: 'Visiology Platform - Data migration module',
                            text: 'The data migration module is used to export/import settings and platform data from one server to another.',
                            previewSrc: 'assets/export-import_preview_en.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Data migration module',
                            images: [
                                {
                                    src: 'assets/export-import_1_en.png',
                                    caption: 'Entities for export selection window'
                                },
                                {
                                    src: 'assets/export-import_2_en.png',
                                    caption: 'Window with the final list of exported entities'
                                },
                                {
                                    src: 'assets/export-import_3_en.png',
                                    caption: 'Window with a list of entities to be changed during import'
                                }
                            ]
                        }
                    },
                    regularReporting: {
                        card: {
                            title: 'Visiology Platform - Regulatory reporting module',
                            text: 'The regulatory reporting module is used to edit Excel documents created based on data from dashboards.',
                            previewSrc: 'assets/regular-reporting_preview_en.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Regulatory reporting module',
                            images: [
                                {
                                    src: 'assets/regular-reporting_1_en.png',
                                    caption: 'Page with a list of regulatory reports'
                                },
                                {
                                    src: 'assets/regular-reporting_2_en.png',
                                    caption: 'Report editing page'
                                },
                                {
                                    src: 'assets/regular-reporting_3_en.png',
                                    caption: 'The window for adding a widget with data to the report'
                                }
                            ]
                        }
                    },
                    dashboardDesigner: {
                        card: {
                            title: 'Visiology Platform - Dashboard designer',
                            text: 'The dashboard designer is used to create dashboards for displaying data on web pages of the visualization server.'
                        },
                        modal: {
                            title: 'Visiology Platform - Dashboard designer',
                            images: [
                                {
                                    caption: 'Dashboard designer - general view of the interface'
                                },
                                {
                                    caption: 'Dashboard designer - dashboard list window'
                                },
                                {
                                    caption: 'Dashboard designer - factor analysis window'
                                }
                            ]
                        }
                    },
                    flipbox: {
                        card: {
                            title: 'Flipbox Software Suite',
                            text: 'Flipbox Software Suite is interactive display software with drawing, video conferencing and laptop or smartphone screen display functions.'
                        },
                        modal: {
                            title: 'Flipbox Software Suite',
                            images: [
                                {
                                    caption: 'Main page'
                                },
                                {
                                    caption: 'Drawing inside the application'
                                },
                                {
                                    caption: 'Working with the Internet through a browser'
                                },
                                {
                                    caption: 'Phone screen sharing'
                                }
                            ]
                        }
                    }
                },
                education: {
                    header: 'Education',
                    awards: [
                        {
                            title: 'MongoDB - The Complete Developer\'s Guide',
                            issuerAndDate: 'Udemy course - June 2019'
                        },
                        {
                            title: 'C# Mail.ru Test',
                            issuerAndDate: 'Mail.ru certification - January 2019'
                        },
                        {
                            title: 'Cambridge English Level 2 Certificate in ESOL International (FCE)',
                            issuerAndDate: 'Language Link - 2016'
                        },
                        {
                            title: 'NRNU MEPhI - Moscow Engineering Physics Institute',
                            issuerAndDate: 'Year of graduation - 2012'
                        }
                    ]
                },
                contacts: {
                    header: 'Contacts'
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
                    text: 'Доброго времени суток!\n\nМеня зовут Андрей Пономарев, я Senior .NET разработчик из Москвы.\n\nБолее 6 лет я занимаюсь коммерческой разработкой ПО с использованием стека технологий C#, .NET Core и Javascript.\nЛюблю сложные технические задачи, ведение проекта от начала и до конца, системную аналитику и проработку требований к разрабатываемому продукту.\n\nВ свободное время люблю заниматься самообразованием, расширением и углублением своих проффесиональных навыков, а также спортом.'
                },
                skills: {
                    header: 'Навыки',
                    angularJsProgressText: '4 года опыта работы',
                    angularProgressText: '2 года опыта работы',
                    csharpProgressText: 'более 6 лет опыта работы',
                    netCoreProgressText: 'более 6 лет опыта работы'
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
                },
                portfolio: {
                    header: 'Портфолио',
                    modal: {
                        previousImage: 'Предидущий',
                        nextImage: 'Следующий'
                    },
                    visiology3: {
                        card: {
                            title: 'Visiology Platform 3 - Formula Engine',
                            text: 'Formula Engine это ключевой компонент платформы Visiology 3, предназначенный для выполнения выражений на языке DAX в связке с СУБД Clickhouse.'
                        },
                        modal: {
                            title: 'Visiology Platform 3 - Formula Engine',
                            images: [
                                {
                                    caption: 'Formula Engine - реализация backend для построения графиков на основе запросов DAX'
                                },
                                {
                                    caption: 'Formula Engine - реализация парсера и семантического анализа выражений на языке DAX'
                                },
                                {
                                    caption: 'Formula Engine - реализация backend для хранения модели данных (1) и связей между таблицами (2)'
                                },
                                {
                                    caption: 'Formula Engine - пример разбора выражения на языке DAX в синтаксическое дерево'
                                },
                                {
                                    caption: 'Formula Engine - реализация backend для хранения и администрирования наборов данных'
                                },
                                {
                                    caption: 'Formula Engine - реализация backend для хранения и администрирования рабочих областей'
                                }
                            ]
                        }
                    },
                    viqubeAdmin: {
                        card: {
                            title: 'Visiology Platform - Система администрирования БД ViQube',
                            text: 'Система администрирования предназначается для загрузки данных и настройки схемы данных для аналитической базы данных ViQube.',
                            previewSrc: 'assets/viqube-admin_preview_ru.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Система администрирования БД ViQube',
                            images: [
                                {
                                    src: 'assets/viqube-admin_1_ru.png',
                                    caption: 'Страница редактирования планировщика загрузки данных'
                                },
                                {
                                    src: 'assets/viqube-admin_2_ru.png',
                                    caption: 'Страница настройки загрузчика данных'
                                },
                                {
                                    src: 'assets/viqube-admin_3_ru.png',
                                    caption: 'Страница редактирования колонок таблицы'
                                },
                                {
                                    src: 'assets/viqube-admin_4_ru.png',
                                    caption: 'Страница настройки прав доступа к данным'
                                }
                            ]
                        }
                    },
                    ssbi: {
                        card: {
                            title: 'Visiology Platform - Система пользовательской аналитики',
                            text: 'Система пользовательской аналитики предназначается для упрощенного построения отчетов на основе данных из базы данных ViQube.',
                            previewSrc: 'assets/ssbi_preview_ru.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Система пользовательской аналитики',
                            images: [
                                {
                                    src: 'assets/ssbi_1_ru.png',
                                    caption: 'Главная страница - вкладка линейчатой гистограммы'
                                },
                                {
                                    src: 'assets/ssbi_2_ru.png',
                                    caption: 'Окно применения фильтров из данных графика'
                                },
                                {
                                    src: 'assets/ssbi_3_ru.png',
                                    caption: 'Окно настройки фильтров для данных'
                                },
                                {
                                    src: 'assets/ssbi_4_ru.png',
                                    caption: 'Главная страница - вкладка карты'
                                }
                            ]
                        }
                    },
                    exportImport: {
                        card: {
                            title: 'Visiology Platform - Модуль переноса данных',
                            text: 'Модуль переноса данных используется для экспорта/импорта настроек и данных платформы с одного сервера на другой.',
                            previewSrc: 'assets/export-import_preview_ru.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Модуль переноса данных',
                            images: [
                                {
                                    src: 'assets/export-import_1_ru.png',
                                    caption: 'Окно выбора сущностей для экспорта'
                                },
                                {
                                    src: 'assets/export-import_2_ru.png',
                                    caption: 'Окно с итоговым списком экспортируемых сущностей'
                                },
                                {
                                    src: 'assets/export-import_3_ru.png',
                                    caption: 'Окно со списком изменяемых при импорте сущностей'
                                }
                            ]
                        }
                    },
                    regularReporting: {
                        card: {
                            title: 'Visiology Platform - Модуль регламентных отчетов',
                            text: 'Модуль регламентных отчетов используется для редактирования Excel документов, создаваемых на основе данных из дэшбордов.',
                            previewSrc: 'assets/regular-reporting_preview_ru.png'
                        },
                        modal: {
                            title: 'Visiology Platform - Модуль регламентных отчетов',
                            images: [
                                {
                                    src: 'assets/regular-reporting_1_ru.png',
                                    caption: 'Страница со списком регламентных отчетов'
                                },
                                {
                                    src: 'assets/regular-reporting_2_ru.png',
                                    caption: 'Страница редактирования отчета'
                                },
                                {
                                    src: 'assets/regular-reporting_3_ru.png',
                                    caption: 'Окно добавления виджета с данными в отчет'
                                }
                            ]
                        }
                    },
                    dashboardDesigner: {
                        card: {
                            title: 'Visiology Platform - Конструктор дэшбордов',
                            text: 'Конструктор дэшбордов предназначается для создания дэшбордов для отображения данных на веб страницах сервера визуализации.'
                        },
                        modal: {
                            title: 'Visiology Platform - Конструктор дэшбордов',
                            images: [
                                {
                                    caption: 'Конструктор дэшбордов - общий вид интерфейса'
                                },
                                {
                                    caption: 'Конструктор дэшбордов - окно списка дэшбордов'
                                },
                                {
                                    caption: 'Конструктор дэшбордов - окно анализа факторов'
                                }
                            ]
                        }
                    },
                    flipbox: {
                        card: {
                            title: 'Flipbox Software Suite',
                            text: 'Flipbox Software Suite - это программное обеспечение для интерактивных дисплееев с функциями рисования, видеоконференц-связи и отображения экрана ноутбука или смартфона.'
                        },
                        modal: {
                            title: 'Flipbox Software Suite',
                            images: [
                                {
                                    caption: 'Главный экран'
                                },
                                {
                                    caption: 'Рисование внутри приложения'
                                },
                                {
                                    caption: 'Работа с интернетом через браузер'
                                },
                                {
                                    caption: 'Показ экрана телефона'
                                }
                            ]
                        }
                    }
                },
                education: {
                    header: 'Образование',
                    awards: [
                        {
                            title: 'MongoDB - The Complete Developer\'s Guide',
                            issuerAndDate: 'Udemy course - Июнь 2019'
                        },
                        {
                            title: 'C# Mail.ru Test',
                            issuerAndDate: 'Mail.ru certification - Январь 2019'
                        },
                        {
                            title: 'Cambridge English Level 2 Certificate in ESOL International (FCE)',
                            issuerAndDate: 'Language Link - 2016'
                        },
                        {
                            title: 'НИЯУ МИФИ - Московский инженерно-физический институт',
                            issuerAndDate: 'Год окончания - 2012'
                        }
                    ]
                },
                contacts: {
                    header: 'Контакты'
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