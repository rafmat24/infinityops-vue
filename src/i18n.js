import { reactive } from 'vue'

const messages = {
  en: {
    sidebar: {
      role: 'Senior DevOps Engineer'
    },
    nav: {
      about: 'About',
      stack: 'Core stack',
      resume: 'Resume',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m Rafał — your friendly neighborhood IT specialist',
      tagline: 'DevOps focused on Linux, automation, pipelines and many more :)',
      cta_resume: 'View CV',
      cta_contact: 'Contact me'
    },
    about: {
      title: 'About me',
      paragraph:
        'DevOps by profession and passion. There\'s nothing better than a well-automated environment that meets the client\'s needs.<br>' +
        'I believe the best results come from combining technical knowledge with intuition and experience. That\'s why I approach every project as a challenge.<br>' +
        'In my free time, I enjoy experimenting with new technologies, sharing knowledge, and learning from others. I believe the best solutions come from open dialogue and collaboration.<br>' +
        'On a personal note: an unabashed fan of comics and MCU movies, fantasy literature, and a science enthusiast, particularly in mathematics and physics.'
    },
    stack: {
      title: 'Core Stack',
      systems: {
        title: 'Systems',
        items: [
          'Linux (various distros)',
          'Virtualization & bare-metal',
          'Windows administration & AD',
          'Windows Server services administration',
          'PowerShell & Bash scripting'
        ]
      },
      devops: {
        title: 'DevOps',
        items: [
          'CI/CD pipeline design',
          'Containerization (Docker, LXC, Kubernetes)',
          'Artifact repositories (Artifactory)',
          'Code quality checks (Coverity, SonarQube, WIZ, Protex, CodeQL and others)',
          'Support for .NET / Java / Python / Go'
        ]
      },
      training: {
        title: 'Training & Education',
        items: [
          'Internal trainings',
          'Daily knowledge sharing',
          'Curiosity-driven learning'
        ]
      }
    },
    resume: {
      title: 'CV',
      items: [
        { title: 'Senior DevOps Engineer — EMAGINE (NORDEA), Gdańsk', dates: '2025 - Present', description: 'CI/CD (Jenkins) support, infrastructure maintenance, code reviews, monitoring with Splunk, internal trainings, Ansible/Docker/Kubernetes, cloud migration support and automation with Python/Bash.' },
        { title: 'Infrastructure and DevOps Engineer — Intel, Gdańsk', dates: 'Dec 2023 - Sep 2025', description: 'Support for internal clients and critical infrastructure, implementing features and fixes (Python/Bash/PowerShell), code review, monitoring, and delivering trainings and innovation initiatives.' },
        { title: 'Software Engineer - DevOps — Solidigm, Gdańsk', dates: 'Feb 2022 - Oct 2023', description: 'PMEASE QuickBuild architecting, build tooling (Microsoft stack), scripting (Python/PowerShell/Groovy/Bash), GitLab and Artifactory maintenance, static analysis (Klocwork), Protex/BlackDuck integration, CI/CD migration and user training/documentation.' },
        { title: 'Test and Analysis Engineer — SII (Nordea), Gdańsk', dates: 'Nov 2020 - Jan 2022', description: 'Data migrations to Hadoop, configuration and documentation, coordinating deployments (Jenkins/Ansible) and collaborating with clients and development teams.' },
        { title: 'Support Specialist — SII (Internal IT), Gdańsk', dates: 'Nov 2019 - Oct 2020', description: 'Local IT support: diagnosing and resolving hardware and software issues for internal users.' },
        { title: 'Teacher — Centrum Nauki i Biznesu Żak, Gdańsk', dates: 'Jan 2020 - Feb 2021', description: 'Delivered Practical IT Technician courses covering OS administration, local networks and databases; prepared students for certification exams.' },
        { title: 'Software Engineer — SII (Intel), Gdańsk', dates: 'Jul 2019 - Oct 2019', description: 'Developed Python test cases for firmware validation, performed test analysis and maintained existing tests.' },
        { title: 'Program Analyst — WNS Global Services, Gdynia', dates: 'Jan 2017 - Jun 2019', description: 'Provided local IT support, created automation scripts in PowerShell, and collaborated with internal teams to resolve issues.' }
      ]
    },
    contact: {
      title: 'Contact',
      entity: 'Entity:',
      entityValue: 'InfinityOps / JDG',
      tax: 'Tax ID:',
      emailLabel: 'Primary e-mail:',
      email: 'rmatuszak@infinityops.net',
      phoneLabel: 'Phone:'
    },
    footer: {
      copyright: '© 2026 InfinityOps. All rights reserved.'
    }
  },
  pl: {
    sidebar: { role: 'Senior DevOps Engineer' },
    nav: { about: 'O mnie', stack: 'Core stack', resume: 'CV', contact: 'Kontakt' },
    hero: {
      greeting: 'Cześć, jestem Rafał — specjalista IT z sąsiedztwa',
      tagline: 'DevOps skupiony na Linuxie, automatyzacji, pipeline\'ach i wielu innych :)',
      cta_resume: 'Zobacz CV',
      cta_contact: 'Skontaktuj się'
    },
    about: {
      title: 'O mnie',
      paragraph:
        'DevOps z zawodu i z pasji. Nie ma dla mnie nic lepszego od dobrze zautomatyzowanego środowiska, które wychodzi naprzeciw oczekiwaniom klienta.<br>' +
        'Uważam, że najlepsze wyniki osiągamy, gdy łączy się techniczna wiedza z intuicją i doświadczeniem. Dlatego do każdego projektu podchodzę jak do wyzwania.<br>' +
        'W czasie wolnym lubię eksperymentować z nowymi technologiami, dzielić się wiedzą i uczyć się od innych. Wierzę, że najlepsze rozwiązania powstają w otwartym dialogu i współpracy.<br>' +
        'Prywatnie: niepoprawny fan komiksów i filmów MCU, literatury fantastycznej, a także pasjonat nauki, szczególnie matematyki i fizyki'
    },
    stack: {
      title: 'Core Stack',
      systems: {
        title: 'Systems',
        items: [
          'Linux (różne dystrybucje)',
          'Wirtualizacja i bare-metal',
          'Administracja Windows & AD',
          'Zarządzanie usługami Windows Server',
          'Skrypty PowerShell & Bash'
        ]
      },
      devops: {
        title: 'DevOps',
        items: [
          'Projektowanie CI/CD',
          'Konteneryzacja (Docker, LXC, Kubernetes)',
          'Repozytoria artefaktów (Artifactory)',
          'Sprawdzanie kodu (Coverity, SonarQube, WIZ, Protex, CodeQL i inne)',
          'Wsparcie dla .NET / Java / Python / Go'
        ]
      },
      training: {
        title: 'Szkolenia & edukacja',
        items: [
          'Szkolenia wewnętrzne',
          'Dzielenie się wiedzą na co dzień',
          'Chęć eksploracji nowych obszarów'
        ]
      }
    },
    resume: {
      title: 'CV',
      items: [
        { title: 'Starszy Inżynier DevOps — EMAGINE (NORDEA), Gdańsk', dates: '2025 - obecnie', description: 'Wsparcie CI/CD (Jenkins), utrzymanie infrastruktury, przeglądy kodu, monitoring (Splunk), szkolenia wewnętrzne, Ansible/Docker/Kubernetes, wsparcie migracji do chmury wewnętrznej oraz automatyzacja (Python/Bash).' },
        { title: 'Inżynier Infrastruktury i DevOps — Intel, Gdańsk', dates: 'XII 2023 - IX 2025', description: 'Wsparcie klientów wewnętrznych i krytycznej infrastruktury, implementacja funkcji i poprawek (Python/Bash/PowerShell), przeglądy kodu, monitoring oraz prowadzenie szkoleń i inicjatyw innowacyjnych.' },
        { title: 'Inżynier Oprogramowania - DevOps — Solidigm, Gdańsk', dates: 'II 2022 - X 2023', description: 'Architektura PMEASE QuickBuild, narzędzia buildowe (Microsoft stack), skrypty (Python/PowerShell/Groovy/Bash), utrzymanie GitLab i Artifactory, analiza statyczna (Klocwork), integracja Protex/BlackDuck, migracja CI/CD, szkolenia i dokumentacja.' },
        { title: 'Inżynier Testów i Analiz — SII (Nordea), Gdańsk', dates: 'XI 2020 - I 2022', description: 'Migracje danych do Hadoop, konfiguracje i dokumentacja, koordynacja wdrożeń (Jenkins/Ansible) oraz współpraca z klientami i zespołami deweloperskimi.' },
        { title: 'Specjalista Wsparcia — SII (IT wewnętrzne), Gdańsk', dates: 'XI 2019 - X 2020', description: 'Lokalne wsparcie IT: diagnoza i rozwiązywanie problemów sprzętowych i programowych dla pracowników.' },
        { title: 'Nauczyciel — Centrum Nauki i Biznesu Żak, Gdańsk', dates: 'I 2020 - II 2021', description: 'Prowadzenie kursów Technik Informatycznych: administracja systemami, sieci lokalne i bazy danych; przygotowanie uczniów do egzaminów zawodowych.' },
        { title: 'Inżynier Oprogramowania — SII (Intel), Gdańsk', dates: 'VII 2019 - X 2019', description: 'Tworzenie testów w Python do walidacji firmware, analiza wyników testów i utrzymanie istniejących testów.' },
        { title: 'Analityk Programów — WNS Global Services, Gdynia', dates: 'I 2017 - VI 2019', description: 'Wsparcie IT dla pracowników, skrypty automatyzujące w PowerShell oraz współpraca z zespołami wewnętrznymi przy rozwiązywaniu problemów.' }
      ]
    },
    contact: {
      title: 'Kontakt',
      entity: 'Podmiot:',
      entityValue: 'InfinityOps / JDG',
      tax: 'NIP:',
      emailLabel: 'Główny e-mail:',
      email: 'rmatuszak@infinityops.net',
      phoneLabel: 'Telefon:'
    },
    footer: {
      copyright: '© 2026 InfinityOps. All rights reserved.'
    }
  }
}

const state = reactive({ locale: 'en' })

function t(key) {
  const parts = key.split('.')
  let v = messages[state.locale]
  for (const p of parts) {
    if (v == null) return key
    v = v[p]
  }
  return v == null ? key : v
}

function setLocale(l) {
  if (messages[l]) state.locale = l
}

export { state, t, setLocale }
