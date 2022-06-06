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
                },
                portfolio : {
                    header: 'Portfolio',
                    modal: {
                        previousImage: 'Previous',
                        nextImage: 'Next'
                    },
                    viqubeAdmin: {
                        card: {
                            title: 'Visiology Platform - ViQube database administration system',
                            text: 'The administration system is designed to load data and configure the data scheme for the ViQube analytical database.'
                        },
                        modal: {
                            title: 'Visiology Platform - ViQube database administration system',
                            images: [
                                {
                                    caption: 'Scheduler settings page'
                                },
                                {
                                    caption: 'Data loader settings page'
                                },
                                {
                                    caption: 'Table columns editor page'
                                },
                                {
                                    caption: 'Access rights settings page'
                                }
                            ]
                        }
                    },
                    ssbi: {
                        card: {
                            title: 'Visiology Platform - Self-service analytics system',
                            text: 'The self-service analytics system is intended for simplified reporting based on data from the ViQube database.'
                        },
                        modal: {
                            title: 'Visiology Platform - Self-service analytics system',
                            images: [
                                {
                                    caption: 'Main page - bar chart tab'
                                },
                                {
                                    caption: 'Window for applying filters from chart data'
                                },
                                {
                                    caption: 'Data filter settings window'
                                },
                                {
                                    caption: 'Home page - map tab'
                                }
                            ]
                        }
                    },
                    exportImport: {
                        card: {
                            title: 'Visiology Platform - Data migration module',
                            text: 'The data migration module is used to export/import settings and platform data from one server to another.'
                        },
                        modal: {
                            title: 'Visiology Platform - Data migration module',
                            images: [
                                {
                                    caption: 'Entities for export selection window'
                                },
                                {
                                    caption: 'Window with the final list of exported entities'
                                },
                                {
                                    caption: 'Window with a list of entities to be changed during import'
                                }
                            ]
                        }
                    },
                    regularReporting: {
                        card: {
                            title: 'Visiology Platform - Regulatory reporting module',
                            text: 'The regulatory reporting module is used to edit Excel documents created based on data from dashboards.'
                        },
                        modal: {
                            title: 'Visiology Platform - Regulatory reporting module',
                            images: [
                                {
                                    caption: 'Page with a list of regulatory reports'
                                },
                                {
                                    caption: 'Report editing page'
                                },
                                {
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
                },
                portfolio : {
                    header: 'Портфолио',
                    modal: {
                        previousImage: 'Предидущий',
                        nextImage: 'Следующий'
                    },
                    viqubeAdmin: {
                        card: {
                            title: 'Visiology Platform - Система администрирования БД ViQube',
                            text: 'Система администрирования предназначается для загрузки данных и настройки схемы данных для аналитической базы данных ViQube.'
                        },
                        modal: {
                            title: 'Visiology Platform - Система администрирования БД ViQube',
                            images: [
                                {
                                    caption: 'Страница редактирования планировщика загрузки данных'
                                },
                                {
                                    caption: 'Страница настройки загрузчика данных'
                                },
                                {
                                    caption: 'Страница редактирования колонок таблицы'
                                },
                                {
                                    caption: 'Страница настройки прав доступа к данным'
                                }
                            ]
                        }
                    },
                    ssbi: {
                        card: {
                            title: 'Visiology Platform - Система пользовательской аналитики',
                            text: 'Система пользовательской аналитики предназначается для упрощенного построения отчетов на основе данных из базы данных ViQube.'
                        },
                        modal: {
                            title: 'Visiology Platform - Система пользовательской аналитики',
                            images: [
                                {
                                    caption: 'Главная страница - вкладка линейчатой гистограммы'
                                },
                                {
                                    caption: 'Окно применения фильтров из данных графика'
                                },
                                {
                                    caption: 'Окно настройки фильтров для данных'
                                },
                                {
                                    caption: 'Главная страница - вкладка карты'
                                }
                            ]
                        }
                    },
                    exportImport: {
                        card: {
                            title: 'Visiology Platform - Модуль переноса данных',
                            text: 'Модуль переноса данных используется для экспорта/импорта настроек и данных платформы с одного сервера на другой.'
                        },
                        modal: {
                            title: 'Visiology Platform - Модуль переноса данных',
                            images: [
                                {
                                    caption: 'Окно выбора сущностей для экспорта'
                                },
                                {
                                    caption: 'Окно с итоговым списком экспортируемых сущностей'
                                },
                                {
                                    caption: 'Окно со списком изменяемых при импорте сущностей'
                                }
                            ]
                        }
                    },
                    regularReporting: {
                        card: {
                            title: 'Visiology Platform - Модуль регламентных отчетов',
                            text: 'Модуль регламентных отчетов используется для редактирования Excel документов, создаваемых на основе данных из дэшбордов.'
                        },
                        modal: {
                            title: 'Visiology Platform - Модуль регламентных отчетов',
                            images: [
                                {
                                    caption: 'Страница со списком регламентных отчетов'
                                },
                                {
                                    caption: 'Страница редактирования отчета'
                                },
                                {
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