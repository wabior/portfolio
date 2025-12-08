// eslint-disable-next-line no-unused-vars
const siteContent = {
    meta: {
        title: 'Portfolio – Jarosław Wabich',
        badge: 'Mid Full Stack PHP • B2B',
        footer: 'Portfolio hostowane na GitHub Pages – czysty HTML + JS.',
        updated: 'aktualne na 12.2025'
    },
    hero: {
        introBadge: 'Cześć, jestem',
        name: 'Jarosław Wabich',
        lead: `Full Stack PHP Developer z doświadczeniem w budowaniu i utrzymaniu dużych aplikacji webowych.
            Pracuję w modelu B2B od 2021 r. Specjalizuję się w PHP 8.x, analizie istniejącego kodu legacy
            na potrzeby refactoru lub dodania nowych funkcji. Mam doświadczenie w integracji systemów poprzez REST API.`,
        ctaPrimary: {label: 'Zobacz projekty', href: '#projekty'},
        ctaCv: {label: 'Pobierz CV (md)', href: 'cv.md'},
        ctaContact: {label: 'Porozmawiajmy', href: '#kontakt'},
        snapshotTitle: 'Snapshot zawodowy',
        specialization:
            'Specjalizacja: czyste PHP OOP, CakePHP, Laravel, MySQL, SCSS/Bootstrap 5, Vanilla JS/jQuery, Docker.',
        domains:
            'Doświadczenie domenowe: finanse i podatki (wfirma.pl), e-commerce (Redcart), CMS-y i wydawnictwa (ebooki/broszury), portale contentowe.',
        pills: [
            'PHP 8.2',
            'CakePHP / MVC',
            'MySQL + migracje',
            'Bootstrap 5',
            'Docker & Linux',
            'Git • Code Review'
        ]
    },
    projects: {
        titleBadge: 'Projekty',
        title: 'Wybrane realizacje',
        subtitle:
            'Od wdrożeń UI z Figmy po integracje podatkowe i refaktoryzacje dużych monolitów.',
        items: [
            {
                name: 'wfirma.pl',
                period: 'produkt: megaaplikacja B2B',
                description:
                    `Nowe funkcje (PIT kasowy, integracja 5ways.pl), bieżące utrzymanie, hotfixy produkcyjne. 
                    Refaktoryzacja z PHP 7.4 do 8.2, porządkowanie przestrzeni nazw w dużym monolicie CakePHP.`,
                tags: [
                    'CakePHP',
                    'PHP 8.2',
                    'MySQL',
                    'Integracje',
                    'Refactor',
                    'Finanse/Podatki'
                ],
                image:
                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80'
            },
            {
                name: 'poradnikprzedsiebiorcy.pl',
                period: 'UI z Figmy → produkcja',
                description:
                    'Wdrożenie layoutu z Figmy, pixel perfect w SCSS i Bootstrap 5. Responsywność, komponentowe podejście, optymalizacja styli.',
                tags: ['SCSS', 'Bootstrap 5', 'RWD', 'UI z Figmy'],
                image:
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
            },
            {
                name: 'Ebooki i broszury – CMS',
                period: 'Edytor treści + PDF do druku',
                description:
                    'CMS do wielostronicowych broszur gotowych do druku i pobrania PDF. Edytor tekstu i okładek, spis treści, bloki contentu (np. cytaty).',
                tags: ['PHP', 'MySQL', 'CMS', 'PDF', 'Content tools'],
                image:
                    'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80'
            },
            {
                name: 'Redcart.pl',
                period: 'E-commerce',
                description:
                    'Wsparcie e-commerce: utrzymanie i rozwój funkcji sklepowych, praca na istniejącym kodzie.',
                tags: ['PHP', 'E-commerce', 'Utrzymanie', 'Zespół developerski'],
                image:
                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80'
            }
        ]
    },
    skills: {
        titleBadge: 'Umiejętności',
        title: 'Stack & narzędzia',
        subtitle:
            'Technologie, w których codziennie pracuję i które realnie dostarczają wartość.',
        groups: [
            {
                title: 'Backend',
                icon: '💻',
                items: [
                    'Czyste PHP OOP (interfejsy, dziedziczenie, traity)',
                    'CakePHP / MVC / serwisy + DI',
                    'Laravel (dyplom, side projekty)',
                    'MySQL: migracje, złożone zapytania, indeksy'
                ]
            },
            {
                title: 'Frontend',
                icon: '🎨',
                items: [
                    'SCSS / SASS, Bootstrap 4/5',
                    'Vanilla JS + jQuery dla UI i requestów',
                    'Pixel perfect z Figmy',
                    'Obsługa DOM, interaktywne komponenty'
                ]
            },
            {
                title: 'DevOps / środowiska',
                icon: '⚙️',
                items: [
                    'Docker (compose, sieci, wolumeny)',
                    'Linux (Debian) – konfiguracja środowisk',
                    'Apache2, PHP, MySQL instalacje',
                    'SSH, logi (Kibana), error handling'
                ]
            },
            {
                title: 'Proces i narzędzia',
                icon: '📌',
                items: [
                    'SCRUM (1-2 tyg. sprinty)',
                    'Jira – grooming, backlog, statusy',
                    'Code review, rozwiązywanie konfliktów Git',
                    'Debug z xdebug i logami'
                ]
            }
        ]
    },
    experience: {
        titleBadge: 'Doświadczenie',
        title: 'B2B, zespoły, proces',
        subtitle:
            '',
        items: [
            {
                title: 'Web INnovative Software (wins.pl)',
                years: '2021 – 12.2025',
                role: 'Mid Full Stack PHP Developer (B2B)',
                details:
                    'Start z poziomu Junior, finalnie Mid. SCRUM, współpraca z testerami, code review, release na środowiska testowe i produkcję.'
            },
            {
                title: 'Redcart.pl',
                years: '2023 (3 miesiące)',
                role: 'PHP Developer (B2B)',
                details:
                    'E-commerce, wsparcie istniejącego produktu, implementacje funkcji sklepowych.'
            },
            {
                title: 'Toyota Motor Manufacturing Poland',
                years: '2021 (3 mieiące)',
                role: 'Staż w dziale IT',
                details: 'Wsparcie Product Ownera we wdrażaniu aplikacji wewnętrznych, udział w event storming, tworzenie Product Backlog.'
            }
        ]
    },
    education: {
        titleBadge: 'Papier',
        title: 'Wykształcenie',
        subtitle:
            'inżynier informatyk',
        items: [
            {
                title: 'Wyższe',
                years: '2021',
                role: 'INŻYNIER INFORMATYK',
                details:
                    'Akademia Humanistyczno-Ekonomiczna w Łodzi'
            },
            {
                title: 'Średnie',
                years: 'kiedyś',
                role: 'Technik Informatyk',
                details:
                    'Zespół Szkłół elektroniczno-energetycznych w Wałbrzychu'
            }
        ]
    },
    extras: {
        titleBadge: 'Dodatki portfolio',
        title: 'Na czasie',
        subtitle:
            'Sekcje mile widziane w portfolio: usługi, proces pracy i mini case studies.',
        items: [
            {
                title: 'Usługi, które mogę dowieźć',
                body: 'Nowe funkcjonalności w monolicie, refaktoryzacje do PHP 8.2, integracje z zewnętrznymi systemami, naprawy błędów produkcyjnych.',
                image:
                    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'
            },
            {
                title: 'Jak pracuję',
                body: 'Refinement z PO, rozbicie na zadania w Jira, krótki feedback loop z QA, małe PR-y i code review, dbanie o logi i obsługę błędów.',
                image:
                    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'
            },
            {
                title: 'Mini case study: refactor',
                body: 'Migracja kodu z PHP 7.4 do 8.2 i uporządkowanie namespace w dużej bazie kodu – redukcja legacy i łatwiejsze autoloading.',
                image:
                    'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80'
            }
        ]
    },
    contact: {
        titleBadge: 'Kontakt',
        title: 'Porozmawiajmy',
        subtitle:
            'Najchętniej o backendzie w PHP/CakePHP i projektach z jasnym zakresem.',
        email: 'jaroslawwabichit@gmail.com',
        phone: '+48 888 786 401',
        preferences:
            'projekty B2B, możliwość pracy zdalnej, środowiska Linux/Docker.',
        processTitle: 'Krótko o procesie',
        processBody1:
            'Pracowałem w zespołach z testerami, liderem i Product Ownerem. Sprinty 1-2 tyg., refinement backlogu, review, demo dla interesariuszy.',
        processBody2:
            'Typowe zadania: development z Jiry, wrzutki na test, współpraca z QA przy poprawkach, hotfixy, kontakt z biznesem.',
        processPills: ['SCRUM', 'Code Review', 'Hotfix-ready', 'QA cooperation'],
        ctaMail: 'Napisz maila',
        ctaProjects: 'Przejrzyj projekty'
    }
};
