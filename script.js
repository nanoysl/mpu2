const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

const caseData = {
  alcohol: {
    code: "ALK-01",
    label: "Alkohol-MPU",
    title: "Trinkmuster, Nachweise und Veränderung sauber verbinden.",
    copy: "Wir prüfen Trinkhistorie, Abstinenzfrage, Risikosituationen und die Sprache für kritische Gutachterfragen.",
    reason: "Alkohol"
  },
  drugs: {
    code: "DRG-02",
    label: "Drogen-MPU",
    title: "Konsumverlauf und Stabilität müssen mehr leisten als ein Laborblatt.",
    copy: "Wir sortieren Konsumhistorie, Nachweise, Ersatzrisiken, Stabilisierung und kritische Rückfragen im Gespräch.",
    reason: "Drogen"
  },
  points: {
    code: "PTS-03",
    label: "Punkte-MPU",
    title: "Verkehrsverhalten braucht neue Routinen, nicht nur gute Vorsätze.",
    copy: "Wir arbeiten an Risikomustern, Selbsteinschätzung, Alltagstransfer und nachvollziehbaren Schutzfaktoren.",
    reason: "Punkte"
  },
  review: {
    code: "REV-04",
    label: "Gutachten-Review",
    title: "Der zweite Anlauf muss genauer sein als der erste.",
    copy: "Wir lesen Schwachstellen, Widersprüche und fehlende Belege aus dem Gutachten heraus und bauen den neuen Plan darauf auf.",
    reason: "Negatives Gutachten"
  }
};

const programmeData = {
  start: "Fall-Check",
  training: "MPU Training",
  review: "Gutachten-Review"
};

const voices = [
  {
    text: "Ich hatte vorher nur Angst vor dem Gespräch. Danach wusste ich, woran ich wirklich arbeiten muss.",
    name: "Teilnehmer, Alkohol-MPU"
  },
  {
    text: "Das negative Gutachten wurde nicht schöngeredet. Wir haben genau die Lücken bearbeitet.",
    name: "Teilnehmerin, zweiter Anlauf"
  },
  {
    text: "Die Simulation war direkt, aber fair. Dadurch wurde das echte Gespräch weniger unberechenbar.",
    name: "Teilnehmer, Punkte-MPU"
  }
];

function initHeader() {
  const header = document.querySelector("[data-site-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  const syncHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  if (!navToggle || !nav) return;
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initReveals() {
  const items = [...document.querySelectorAll(".reveal")];
  if (!items.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
    observer.observe(item);
  });
}

function initCaseCheck() {
  const buttons = [...document.querySelectorAll(".case-option")];
  const code = document.querySelector("[data-case-code]");
  const label = document.querySelector("[data-case-label]");
  const title = document.querySelector("[data-case-title]");
  const copy = document.querySelector("[data-case-copy]");
  const reasonSelect = document.querySelector("[data-reason-select]");

  const render = (key) => {
    const item = caseData[key] || caseData.alcohol;
    buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.case === key));
    if (code) code.textContent = item.code;
    if (label) label.textContent = item.label;
    if (title) title.textContent = item.title;
    if (copy) copy.textContent = item.copy;
    if (reasonSelect) reasonSelect.value = item.reason;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.case));
  });
}

function initProgrammes() {
  const cards = [...document.querySelectorAll("[data-programme]")];
  const title = document.querySelector("[data-programme-title]");
  if (!cards.length) return;

  const render = (key) => {
    cards.forEach((card) => {
      const selected = card.dataset.programme === key;
      card.classList.toggle("is-selected", selected);
      const button = card.querySelector(".programme-select");
      if (button) button.textContent = selected ? "Ausgewählt" : "Auswählen";
    });
    if (title) title.textContent = programmeData[key] || programmeData.training;
  };

  cards.forEach((card) => {
    const button = card.querySelector(".programme-select");
    if (button) button.addEventListener("click", () => render(card.dataset.programme));
  });
}

function initVoices() {
  let index = 0;
  const text = document.querySelector("[data-voice-text]");
  const name = document.querySelector("[data-voice-name]");
  const buttons = [...document.querySelectorAll("[data-voice-dir]")];
  if (!text || !name) return;

  const render = () => {
    const voice = voices[index];
    text.animate(
      [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: reduceMotion ? 1 : 260, easing: "cubic-bezier(.16,1,.3,1)" }
    );
    text.textContent = voice.text;
    name.textContent = voice.name;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = Number(button.dataset.voiceDir || 1);
      index = (index + direction + voices.length) % voices.length;
      render();
    });
  });

  if (!reduceMotion) {
    window.setInterval(() => {
      index = (index + 1) % voices.length;
      render();
    }, 7000);
  }
}

function initForm() {
  const form = document.querySelector("[data-lead-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("is-sent");
    if (status) status.textContent = "Anfrage vorbereitet. Eine echte Anbindung würde jetzt CRM, E-Mail oder WhatsApp starten.";
  });
}

function initTilt() {
  if (reduceMotion || coarsePointer) return;
  const item = document.querySelector("[data-tilt]");
  if (!item) return;

  item.addEventListener("mousemove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    item.style.transform = `perspective(1100px) rotateX(${y * -3}deg) rotateY(${x * 4}deg)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveals();
  initCaseCheck();
  initProgrammes();
  initVoices();
  initForm();
  initTilt();
});
