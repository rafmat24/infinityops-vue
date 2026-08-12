<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-content">
        <div class="profile-header">
          <div class="avatar-text">IO</div>
          <a href="#" class="brand-name" @click.prevent="goHome" aria-label="Infinity Ops home">
            <img src="/infinity_ops.png" alt="Infinity Ops" class="brand-logo" />
          </a>
          <p class="lead-role">{{ t('sidebar.role') }}</p>
          <div class="lang-switch">
            <button :class="{active: state.locale === 'en'}" @click="setLocale('en')">EN</button>
            <button :class="{active: state.locale === 'pl'}" @click="setLocale('pl')">PL</button>
          </div>
        </div>

        <nav class="sidebar-nav">
          <a href="#about" @click.prevent="setSection('about')"><span>01</span> {{ t('nav.about') }}</a>
          <a href="#stack" @click.prevent="setSection('stack')"><span>02</span> {{ t('nav.stack') }}</a>
          <a href="#services" @click.prevent="setSection('services')"><span>03</span> {{ t('nav.resume') }}</a>
          <a href="#contact" @click.prevent="setSection('contact')"><span>04</span> {{ t('nav.contact') }}</a>
        </nav>

        <div class="sidebar-footer">
          <div class="social-links">
            <a href="https://github.com/rafmat24" target="_blank">GH</a>
            <a href="https://www.linkedin.com/in/rafal-matuszak" target="_blank">LI</a>
            <a href="mailto:rafal.matuszak92@gmail.com">EM</a>
          </div>
          <p class="geo-tag">// devops / gdańsk / zdalnie</p>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <div class="hero">
        <h1 class="hero-greeting">{{ t('hero.greeting') }}</h1>
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
      </div>

      <section v-if="selectedSection === 'about'" id="about" class="content-section">
        <span class="section-index">01 //</span>
        <h2>{{ t('about.title') }}</h2>
        <p class="large-text" v-html="t('about.paragraph')"></p>
      </section>

      <section v-if="selectedSection === 'stack'" id="stack" class="content-section">
        <span class="section-index">02 //</span>
        <h2>{{ t('stack.title') }}</h2>
        <div class="tech-grid">
          <div class="tech-category">
            <h3>{{ t('stack.systems.title') }}</h3>
            <ul>
              <li v-for="item in t('stack.systems.items')" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>{{ t('stack.devops.title') }}</h3>
            <ul>
              <li v-for="item in t('stack.devops.items')" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>{{ t('stack.training.title') }}</h3>
            <ul>
              <li v-for="item in t('stack.training.items')" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section v-if="selectedSection === 'services'" id="services" class="content-section">
        <span class="section-index">03 //</span>
        <h2>{{ t('resume.title') }}</h2>
        <div class="services-list">
          <div class="service-item" v-for="s in t('resume.items')" :key="s.title">
            <h4>{{ s.title }}</h4>
            <h5>{{ s.dates }}</h5><br>
            <p>{{ s.description }}</p>
          </div>
        </div>
      </section>

      <section v-if="selectedSection === 'contact'" id="contact" class="content-section">
        <span class="section-index">04 //</span>
        <h2>{{ t('contact.title') }}</h2>
        <div class="meta-box">
          <div class="meta-row">
            <span class="label">{{ t('contact.entity') }}</span>
            <span class="value">{{ t('contact.entityValue') }}</span>
          </div>
          <div class="meta-row">
            <span class="label">{{ t('contact.tax') }}</span>
            <span class="value">6161538802</span>
          </div>
          <div class="meta-row">
            <span class="label">{{ t('contact.emailLabel') }}</span>
            <span class="value"><a :href="'mailto:' + t('contact.email')" class="inline-link">{{ t('contact.email') }}</a></span>
          </div>
          <div class="meta-row">
            <span class="label">{{ t('contact.phoneLabel') }}</span>
            <span class="value">+48 736 845 400</span>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>{{ t('footer.copyright') }}</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { state, t, setLocale } from './i18n'

const selectedSection = ref(null)

function setSection(section) {
  selectedSection.value = section
  nextTick(() => {
    const target = document.getElementById(section)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

function goHome() {
  selectedSection.value = null
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style>
/* --- HALVEZ DESIGN SYSTEM --- */

:root {
  --bg-main: #ffffff;
  --bg-sidebar: #0a0a0c;
  --text-main: #1c1d21;
  --text-muted: #70727d;
  --text-sidebar: #f5f5f7;
  --accent: #3b82f6;
  --border-color: #e4e4e7;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-main);
  background-color: var(--bg-main);
  -webkit-font-smoothing: antialiased;
}

.layout { display: flex; flex-direction: column; min-height: 100vh; }

/* --- SIDEBAR (CIEMNY, SUROWY BLOK) --- */
.sidebar {
  background-color: var(--bg-sidebar);
  color: var(--text-sidebar);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.a.brand-name, .brand-name {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  text-decoration: none;
  cursor: pointer;
}

.brand-logo {
  display: block;
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.avatar-text {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--accent);
  margin-bottom: 12px;
  letter-spacing: 0.2em;
  font-weight: bold;
}

.lead-role {
  color: var(--text-muted);
  font-size: 1rem;
  margin-top: 8px;
  font-family: var(--font-mono);
}

/* Menu nawigacyjne Halvez */
.sidebar-nav {
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sidebar-nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  gap: 15px;
}
.sidebar-nav a span {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.5;
}
.sidebar-nav a:hover {
  color: #fff;
  transform: translateX(5px);
}

.sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-links { display: flex; gap: 20px; }
.social-links a {
  font-family: var(--font-mono);
  color: var(--text-sidebar);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  border-bottom: 1px solid var(--text-muted);
}
.social-links a:hover { color: var(--accent); border-color: var(--accent); }

.geo-tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* --- MAIN CONTENT (JASNY, PRZESTRZENNY) --- */
.main-content {
  padding: 60px 30px;
  flex: 1;
}

.hero {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 780px;
  margin: 0 auto 60px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.btn.ghost {
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.content-section {
  max-width: 680px;
  margin: 0 auto 100px;
  position: relative;
}

.section-index {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  display: block;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.large-text {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #2d3139;
  font-weight: 400;
}

/* Tech Grid */
.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 20px;
}
@media (min-width: 600px) {
  .tech-grid { grid-template-columns: 1fr 1fr; }
}

.tech-category h3 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 15px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.tech-category ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-category li {
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
.tech-category li::before {
  content: "—";
  color: var(--text-muted);
}

/* Usługi */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.service-item {
  border-left: 2px solid var(--border-color);
  padding-left: 20px;
}
.service-item h4 {
  font-size: 1.15rem;
  margin-bottom: 8px;
  font-weight: 600;
}
.service-item p {
  color: var(--text-muted);
  line-height: 1.6;
}

/* Meta Box (Dane firmy) */
.meta-box {
  border: 1px solid var(--border-color);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fafafa;
}
.meta-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: 10px;
}
.meta-row:last-child { border-bottom: none; padding-bottom: 0; }
.meta-row .label { font-family: var(--font-mono); color: var(--text-muted); font-size: 0.9rem; }
.meta-row .value { font-weight: 600; font-size: 0.95rem; }
.inline-link { color: var(--text-main); text-decoration: none; border-bottom: 1px solid var(--text-main); }
.inline-link:hover { color: var(--accent); border-color: var(--accent); }

.site-footer {
  margin-top: 120px;
  border-top: 1px solid var(--border-color);
  padding-top: 30px;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: var(--font-mono);
}

/* --- RESPONSIVENESS (COMPUTE MODE) --- */
@media (min-width: 992px) {
  .layout { flex-direction: row; }
  
  .sidebar {
    width: 35%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 80px 60px;
  }
  
  .main-content {
    margin-left: 35%;
    padding: 100px 100px 100px 80px;
  }
}

/* small UI additions */
.lang-switch { margin-top: 12px; display:flex; gap:8px; }
.lang-switch button {
  background: transparent; border: 1px solid rgba(255,255,255,0.06);
  color: var(--text-muted); padding: 6px 8px; font-family: var(--font-mono);
  cursor: pointer; border-radius: 4px; font-weight: 600;
}
.lang-switch button.active { color: var(--accent); border-color: var(--accent); }

.hero { max-width: 720px; margin-bottom: 60px; }
.hero-greeting { font-size: 2rem; margin-bottom: 10px; }
.hero-tagline { color: var(--text-muted); margin-bottom: 18px; font-size: 1.1rem; }
.hero-cta .btn { display: inline-block; margin-right: 12px; padding: 10px 14px; background: var(--accent); color: #fff; text-decoration: none; border-radius: 6px; }
.btn.ghost { background: transparent; color: var(--text-main); border: 1px solid var(--border-color); padding: 9px 13px; }
</style>
