/* global siteContent */

const renderPills = (items = []) =>
    items.map((t) => `<span class="pill">${t}</span>`).join('');

const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = text;
    }
};

const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) {
        el.innerHTML = html;
    }
};

const populateHero = (hero, meta) => {
    setText('badge-role', meta.badge);
    setText('hero-intro', hero.introBadge);
    setText('hero-name', hero.name);
    setText('hero-lead', hero.lead);
    setText('snapshot-title', hero.snapshotTitle);
    setText('snapshot-specialization', hero.specialization);
    setText('snapshot-domains', hero.domains);
    setHTML('hero-pills', renderPills(hero.pills));

    const ctaPrimary = document.getElementById('cta-primary');
    const ctaCv = document.getElementById('cta-cv');
    const ctaContact = document.getElementById('cta-contact');

    if (ctaPrimary) {
        ctaPrimary.textContent = hero.ctaPrimary.label;
        ctaPrimary.href = hero.ctaPrimary.href;
    }
    if (ctaCv) {
        ctaCv.textContent = hero.ctaCv.label;
        ctaCv.href = hero.ctaCv.href;
    }
    if (ctaContact) {
        ctaContact.textContent = hero.ctaContact.label;
        ctaContact.href = hero.ctaContact.href;
    }
};

const populateProjects = (projects) => {
    setText('projekty-badge', projects.titleBadge);
    setText('projekty-title', projects.title);
    setText('projekty-subtitle', projects.subtitle);

    const grid = document.getElementById('projects-grid');
    if (!grid) {
        return;
    }

    grid.innerHTML = projects.items
        .map(
            (p) => `
    <article class="card">
      <img src="${p.image}" alt="Projekt ${p.name}" loading="lazy" />
      <h3><a href="https://${p.name}" class="link">${p.name}</a></h3>
      <p><strong>${p.period}</strong></p>
      <p>${p.description}</p>
      <div>${renderPills(p.tags)}</div>
    </article>
  `,
        )
        .join('');
};

const populateSkills = (skills) => {
    setText('umiejetnosci-badge', skills.titleBadge);
    setText('umiejetnosci-title', skills.title);
    setText('umiejetnosci-subtitle', skills.subtitle);

    const grid = document.getElementById('skills-grid');
    if (!grid) {
        return;
    }

    grid.innerHTML = skills.groups
        .map(
            (s) => `
    <article class="card">
      <p class="badge">${s.icon} ${s.title}</p>
      <ul class="list list--skills">
        ${s.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `,
        )
        .join('');
};

const populateExperience = (experience) => {
    setText('doswiadczenie-badge', experience.titleBadge);
    setText('doswiadczenie-title', experience.title);
    setText('doswiadczenie-subtitle', experience.subtitle);

    const timeline = document.getElementById('timeline');
    if (!timeline) {
        return;
    }

    timeline.innerHTML = experience.items
        .map(
            (e) => `
    <div class="timeline__item">
      <h3>${e.title} • <span class="accent">${e.years}</span></h3>
      <p><strong>${e.role}</strong></p>
      <p>${e.details}</p>
    </div>
  `,
        )
        .join('');
};

const populateEducation = (education) => {
    setText('education-badge', education.titleBadge);
    setText('education-title', education.title);
    setText('education-subtitle', education.subtitle);

    const timeline = document.getElementById('edu-timeline');
    if (!timeline) {
        return;
    }

    timeline.innerHTML = education.items
        .map(
            (e) => `
    <div class="timeline__item">
      <h3>${e.title} • <span class="accent">${e.years}</span></h3>
      <p><strong>${e.role}</strong></p>
      <p>${e.details}</p>
    </div>
  `,
        )
        .join('');
};

const populateExtras = (extras) => {
    setText('bonus-badge', extras.titleBadge);
    setText('bonus-title', extras.title);
    setText('bonus-subtitle', extras.subtitle);

    const grid = document.getElementById('extras-grid');
    if (!grid) {
        return;
    }

    grid.innerHTML = extras.items
        .map(
            (ex) => `
    <article class="card">
      <img src="${ex.image}" alt="${ex.title}" loading="lazy" />
      <h3>${ex.title}</h3>
      <p>${ex.body}</p>
    </article>
  `,
        )
        .join('');
};

const populateContact = (contact) => {
    setText('kontakt-badge', contact.titleBadge);
    setText('kontakt-title', contact.title);
    setText('kontakt-subtitle', contact.subtitle);

    const emailEl = document.getElementById('contact-email');
    const phoneEl = document.getElementById('contact-phone');
    const prefsEl = document.getElementById('contact-preferences');
    const ctaMail = document.getElementById('contact-cta-mail');
    const ctaProjects = document.getElementById('contact-cta-projects');

    if (emailEl) {
        emailEl.textContent = contact.email;
        emailEl.href = `mailto:${contact.email}`;
    }

    if (phoneEl) {
        phoneEl.textContent = contact.phone;
        phoneEl.href = `tel:${contact.phone.replace(/\s+/g, '')}`;
    }

    if (prefsEl) {
        prefsEl.textContent = contact.preferences;
    }

    if (ctaMail) {
        ctaMail.textContent = contact.ctaMail;
        ctaMail.href = `mailto:${contact.email}?subject=Współpraca%20dev`;
    }

    if (ctaProjects) {
        ctaProjects.textContent = contact.ctaProjects;
    }

    setText('process-title', contact.processTitle);
    setText('process-body1', contact.processBody1);
    setText('process-body2', contact.processBody2);
    setHTML('process-pills', renderPills(contact.processPills));
};

const populateFooter = (meta) => {
    setText('footer-text', meta.footer);
    setText('footer-updated', meta.updated);
};

const enhanceAnchors = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));

            if (!target) {
                return;
            }

            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
        });
    });
};

const init = (content) => {
    if (!content) {
        return;
    }

    populateHero(content.hero, content.meta);
    populateProjects(content.projects);
    populateSkills(content.skills);
    populateExperience(content.experience);
    populateEducation(content.education);
    populateExtras(content.extras);
    populateContact(content.contact);
    populateFooter(content.meta);
    enhanceAnchors();
};

document.addEventListener('DOMContentLoaded', () => init(siteContent));
