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
            na potrzeby refactoru lub dodania nowych funkcji. Mam doświadczenie w integracji systemów poprzez REST API.
            Samodzielnie rozwiązałem setki problemów związanych z błędami produkcyjnymi i ich diagnostyką.
            Ściśle współpracowałem  z biznesem, jasno tłumacząc skomplikowane zagadnienia techniczne, jak również zbierałem niejasne wymagania biznesowe 
            i tłumaczyłem je na język techniczny.`,
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
                period: 'Megaaplikacja do prowadzenia działalności gospodarczej, wystawiania faktur, rozliczania ZUS i podatków, zarządzania pracownikami, magazynem towaru.',
                description:
                    `Wdrażanie nowych funkcji systemu np. <a href="https://poradnikprzedsiebiorcy.pl/-kasowy-pit-dla-przedsiebiorcow-czym-jest" target="_blank" class="link">PIT kasowy</a>,
                    <a href="https://5ways.pl" target="_blank" class="link">integracja 5ways.pl</a>. Bieżące utrzymanie czyli naprawa bugów, hotfixy produkcyjne. 
                    Refaktoryzacja z PHP 7.4 do 8.2`,
                tags: [
                    'CakePHP',
                    'PHP 8.2',
                    'MySQL',
                    'Integracje REST API',
                    'Refactor'
                ],
                image:
                    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80'
            },
            {
                name: 'poradnikprzedsiebiorcy.pl',
                period: 'Portal biznesowo - prawny z artykułami z zakresu księgowości, podatków, prawa, płac i ubezpieczeń.',
                description:
                    `Wdrożenie nogego projektu graficznego - przeniesienie layoutu z Figmy na kod frontendu, pixel perfect w SCSS i Bootstrap 5. Responsywność, komponentowe podejście, optymalizacja styli.
                    Obsługa backendu costomowego CMS: edytor artykułow, zarządzanie kategoriami, menu, sekcji, widgetów, customowe sidebary.`,
                tags: ['SCSS', 'Bootstrap 5', 'RWD', 'UI z Figmy'],
                image:
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
            },
            {
                name: 'Broszuromat: ebooki i broszury',
                link: 'https://biblio.ebookpoint.pl/wydawca/16/0/3/wydawnictwo-wins?jezyk=pl',
                period: 'CMS do wielostronicowych broszur gotowych do druku i pobrania PDF.',
                description:
                    'Zaprojektowanie i wykonanie customowego CMS zawierającego edytor tekstu i okładek, spis treści, bloki contentu (np. cytaty), w którym autor mógł wybierać wygląd broszury z predefiniowanych szablonów. Wymiary były dostosowane do wymagań drukarni.',
                tags: ['PHP', 'MySQL', 'CMS', 'PDF', 'Docker'],
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
                    'Znajomość podejścia MVC - Model, View, Controller',
                    'Znajomość podejścia frameworkowego (rozwinięcie MVC o serwisy i Dependency Injection, ORM, routing)',
                    'Frameworki: CakePHP i Laravel (praca dyplomowa, side projekty)',
                    'MySQL: migracje, złożone zapytania, optymalizacja zapytań, indeksy proste i złożone',
                    'PHPUnit - podstawy testowania kodu PHP',
                    'Logowanie błędów'
                ]
            },
            {
                title: 'Frontend',
                icon: '🎨',
                items: [
                    'SCSS / SASS',
                    'Bootstrap 4/5',
                    'Vanilla JS',
                    'Wdrażanie projektów z Figmy czy Adobe XD',
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
                    'SSH',
                    'Kibana w celu znalezienia logów, diagnozowania błędów'
                ]
            },
            {
                title: 'Proces i narzędzia',
                icon: '📌',
                items: [
                    'SCRUM - odbyłem kilka szkoleń',
                    'Jira - tworzenie tablic, zadań, sprintów, backlog, wykresy',
                    'Code review innych programistów',
                    'Rozwiązywanie konfliktów Git',
                    'Debugowanie z xdebug i logami',
                    'Narzędzie cursor - edytor kodu z ai'
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
            'Drugi raz nie poszedłbym na studia.',
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
            '',
        items: [
            {
                title: 'Jak pracowałem',
                body: 'Pracowałem w różnych zespołach SCRUM`owych, składających się z deweloperów (programiści, testerzy, graficy), czasem był lider. Sprinty 1-2 tyg., refinement założeń z biznesem, sprint review czyli pokazanie rezultatów na żywo interesariuszom.',
                image:
                    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80'
            },
            {
                title: 'Typowa rutyna',
                body: `Migracja kodu z PHP 7.4 do 8.2 i uporządkowanie namespace w dużej bazie kodu – redukcja legacy i łatwiejsze autoloading.
                development zadań z Jiry, deployment kodu na środowisko testowe, współpraca z QA przy poprawkach błędów, hotfixy, kontakt z biznesem np w celu negocjacji okrojenia założeń aby zdążyć z wydaniem na czas.`,
                image:
                    'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80'
            }
        ]
    },
    youtube: {
        titleBadge: 'YouTube',
        title: 'Mój kanał Youtube',
        subtitle: 'Filmy z mojego kanału programistycznego – porady, tutoriale i przemyślenia.',
        items: [
            {
                title: '',
                description: '',
                link: 'https://youtu.be/DvGWET6Fl8w'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/vvOnOct0mYY'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/W83l49Q4Plc'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/OHS8gkZajCc'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/oTHZBxR5Too'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/JpiQCDnzv7Q'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/O5vKsLC9y2I'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/1lADUZNMBRI'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/rJaDJir4TWc'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/YlsjFSQ77jg'
            },
            {
                title: '',
                description: '',
                link: 'https://youtu.be/6CTwMFGpGGM'
            }
        ]
    },
    contact: {
        titleBadge: 'Kontakt',
        title: 'Porozmawiajmy',
        subtitle:
            'Najchętniej o projektach z jasnym zakresem.',
        email: 'jaroslawwabichit@gmail.com',
        phone: '+48 888 786 401',
        preferences:
            'projekty B2B, możliwość pracy stacjonarnej u klienta, środowiska Linux/Docker.',
        ctaMail: 'Napisz maila',
        ctaProjects: 'Przejrzyj projekty'
    }
};
