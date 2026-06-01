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
      greeting: 'Hi, I\'m Rafał — I build reliable infrastructure',
      tagline: 'Linux-focused DevOps, self-hosted platforms, automation and networking.',
      cta_resume: 'View CV',
      cta_contact: 'Contact me'
    },
    about: {
      title: 'About me',
      paragraph:
        'I build and maintain reliable IT infrastructure. I focus on Linux automation, containerization in self-hosted environments and network engineering. I prefer pragmatic, efficient architectures over corporate overhead.'
    },
    stack: {
      title: 'Core Stack',
      systems: {
        title: 'Systems & Virtualization',
        items: [
          'Linux (various distros)',
          'Virtualization & bare-metal',
          'Docker & Kubernetes',
          'Windows administration & AD',
          'PowerShell scripting'
        ]
      },
      devops: {
        title: 'DevOps',
        items: [
          'CI/CD pipeline design',
          'Container platforms',
          'Artifact repositories',
          'Vulnerability scanning',
          'Support for .NET / Java / Python / Go projects'
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
        { title: 'Infrastructure Management', description: 'Configuration, hardening and monitoring of Linux hosts and virtualization environments.' },
        { title: 'Local Network Design', description: 'Traffic segmentation (VLAN), secure routing, DNS filters and VPN tunnels.' }
      ]
    },
    contact: {
      title: 'Contact',
      entity: 'Entity:',
      entityValue: 'InfinityOps / JDG',
      tax: 'Tax ID:',
      emailLabel: 'Primary e-mail:',
      email: 'rafal.matuszak92@gmail.com',
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
      greeting: 'Cześć, jestem Rafał — buduję niezawodną infrastrukturę',
      tagline: 'DevOps skupiony na Linuxie, self-hosting, automatyzacja i sieci.',
      cta_resume: 'Zobacz CV',
      cta_contact: 'Skontaktuj się'
    },
    about: {
      title: 'O mnie',
      paragraph:
        'Buduję i utrzymuję niezawodną infrastrukturę IT. Specjalizuję się w automatyzacji systemów Linux, konteneryzacji w środowiskach self-hosted oraz inżynierii sieciowej. Stawiam na pragmatyczne, wydajne rozwiązania.'
    },
    stack: {
      title: 'Core Stack',
      systems: {
        title: 'Systems & Virtualization',
        items: [
          'Linux (różne dystrybucje)',
          'Wirtualizacja i bare-metal',
          'Docker & Kubernetes',
          'Administracja Windows & AD',
          'PowerShell scripting'
        ]
      },
      devops: {
        title: 'DevOps',
        items: [
          'Projektowanie CI/CD',
          'Platformy kontenerowe',
          'Repozytoria artefaktów',
          'Skanowanie podatności',
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
        { title: 'Zarządzanie Infrastrukturą', description: 'Konfiguracja, hardening i monitoring hostów Linux oraz środowisk wirtualizacji.' },
        { title: 'Projektowanie Sieci Lokalnych', description: 'Segmentacja ruchu (VLAN), bezpieczny routing, lokalne filtry DNS i tunele VPN.' }
      ]
    },
    contact: {
      title: 'Kontakt',
      entity: 'Podmiot:',
      entityValue: 'InfinityOps / JDG',
      tax: 'NIP:',
      emailLabel: 'Główny e-mail:',
      email: 'rafal.matuszak92@gmail.com',
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
