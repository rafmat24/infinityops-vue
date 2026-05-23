<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-content">
        <div class="profile-header">
          <div class="avatar-text">IO</div>
          <h1 class="brand-name">infinity<span>ops</span></h1>
          <p class="lead-role">Linux Systems & Network Engineer</p>
        </div>
        
        <nav class="sidebar-nav">
          <a href="#about"><span>01</span> O mnie</a>
          <a href="#stack"><span>02</span> Ekspertyza</a>
          <a href="#services"><span>03</span> Usługi</a>
          <a href="#contact"><span>04</span> Kontakt</a>
        </nav>

        <div class="sidebar-footer">
          <div class="social-links">
            <a href="https://github.com" target="_blank">GH</a>
            <a href="https://linkedin.com" target="_blank">LI</a>
            <a href="mailto:kontakt@twojadomena.pl">EM</a>
          </div>
          <p class="geo-tag">// opg / gdańsk / zdalnie</p>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <section id="about" class="content-section">
        <span class="section-index">01 //</span>
        <h2>O projekcie</h2>
        <p class="large-text">
          Buduję i utrzymuję niezawodną infrastrukturę IT. Specjalizuję się w automatyzacji systemów Linux, konteneryzacji w środowiskach self-hosted oraz inżynierii sieciowej. Omijam korporacyjny overhead na rzecz czystej, wydajnej architektury.
        </p>
      </section>

      <section id="stack" class="content-section">
        <span class="section-index">02 //</span>
        <h2>Core Stack</h2>
        <div class="tech-grid">
          <div class="tech-category">
            <h3>Systems & Virt</h3>
            <ul>
              <li>Linux (various distros)</li>
              <li>Virtualization</li>
              <li>Docker & Kubernetes</li>
              <li>Windows managements (including domain controllers and services)</li>
              <li>Powereshell scripting</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>DevOps</h3>
            <ul>
              <li>Pipeline design & implementation </li>
              <li>Docker & Kubernetes</li>
              <li>Artifactory></li>
              <li>Vulnerabilities scan</li>
              <li>Support for project building process (.NET, Java, Python, Go)</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>Training & education</h3>
            <ul>
              <li>Providing internal trainings</li>
              <li>Sharing knowledge on daily basis</li>
              <li>Eager to explore new technical areas</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" class="content-section">
        <span class="section-index">03 //</span>
        <h2>Zakres działań</h2>
        <div class="services-list">
          <div class="service-item">
            <h4>Zarządzanie Infrastrukturą</h4>
            <p>Konfiguracja, hardening i monitoring hostów Linux oraz środowisk wirtualizacji bare-metal.</p>
          </div>
          <div class="service-item">
            <h4>Projektowanie Sieci Lokalnych</h4>
            <p>Segmentacja ruchu (VLAN), bezpieczny routing, wdrażanie lokalnych filtrów DNS oraz bezpiecznych tuneli VPN.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="content-section">
        <span class="section-index">04 //</span>
        <h2>Rejestr & Kontakt</h2>
        <div class="meta-box">
          <div class="meta-row">
            <span class="label">Podmiot:</span>
            <span class="value">InfinityOps / JDG</span>
          </div>
          <div class="meta-row">
            <span class="label">NIP:</span>
            <span class="value">6161538802</span>
          </div>
          <div class="meta-row">
            <span class="label">Główny e-mail:</span>
            <span class="value"><a href="mailto:rafal.matuszak92@gmail.com" class="inline-link">rafal.matuszak92@gmail.com</a></span>
          </div>
          <div class="meta-row">
            <span class="label">Telefon</span>
            <span class="value">+48 736 845 400</span>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>© 2026 infinityops. Wszelkie prawa zastrzeżone. Built with Vue/Vite.</p>
      </footer>
    </main>
  </div>
</template>

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

.brand-name {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #fff;
}
.brand-name span { color: var(--text-muted); font-weight: 300; }

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

.content-section {
  max-width: 680px;
  margin-bottom: 100px;
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
</style>
