const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Replace these placeholders with approved external checkout URLs before launch.
const CHECKOUT_LINKS = Object.freeze({
  koffer: "",
  simulator: "",
  coaching: ""
});

const CHECKOUT_FALLBACKS = Object.freeze({
  koffer: "#kontakt",
  simulator: "#kontakt",
  coaching: "#kontakt"
});

window.CHECKOUT_LINKS = CHECKOUT_LINKS;

const caseData = {
  alcohol: {
    code: "ALK-01",
    label: "Alkohol-MPU",
    title: "Trinkmuster, Nachweise und Ver\u00e4nderung sauber verbinden.",
    copy: "Wir pr\u00fcfen Trinkhistorie, Abstinenzfrage, Risikosituationen und die Sprache f\u00fcr kritische Gutachterfragen.",
    reason: "Alkohol"
  },
  drugs: {
    code: "DRG-02",
    label: "Drogen-MPU",
    title: "Konsumverlauf und Stabilit\u00e4t m\u00fcssen mehr leisten als ein Laborblatt.",
    copy: "Wir sortieren Konsumhistorie, Nachweise, Ersatzrisiken, Stabilisierung und kritische R\u00fcckfragen im Gespr\u00e4ch.",
    reason: "Drogen"
  },
  points: {
    code: "PTS-03",
    label: "Punkte-MPU",
    title: "Verkehrsverhalten braucht neue Routinen, nicht nur gute Vors\u00e4tze.",
    copy: "Wir arbeiten an Risikomustern, Selbsteinsch\u00e4tzung, Alltagstransfer und nachvollziehbaren Schutzfaktoren.",
    reason: "Punkte"
  },
  review: {
    code: "REV-04",
    label: "Gutachten-Review",
    title: "Der zweite Anlauf muss genauer sein als der erste.",
    copy: "Wir lesen Schwachstellen, Widerspr\u00fcche und fehlende Belege aus dem Gutachten heraus und bauen den neuen Plan darauf auf.",
    reason: "Negatives Gutachten"
  }
};

function initHeader() {
  const header = document.querySelector("[data-site-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  const syncHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
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
  }, { threshold: 0.08, rootMargin: "0px 0px 12% 0px" });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
    observer.observe(item);
  });
}

function initCounters() {
  const counters = [...document.querySelectorAll("[data-counter]")];
  if (!counters.length) return;

  const format = (value) => value.toLocaleString("de-DE");

  const animate = (counter) => {
    const target = Number(counter.dataset.count || 0);
    if (reduceMotion || !target) {
      counter.textContent = format(target);
      return;
    }

    const start = performance.now();
    const duration = 1100;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = format(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animate(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  counters.forEach((counter) => observer.observe(counter));
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
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.case === key);
    });
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

function initCheckoutLinks() {
  document.querySelectorAll("[data-checkout-product]").forEach((link) => {
    const product = link.dataset.checkoutProduct;
    const checkoutUrl = CHECKOUT_LINKS[product];
    const fallbackUrl = CHECKOUT_FALLBACKS[product] || "#kontakt";
    const targetUrl = checkoutUrl && checkoutUrl.startsWith("http") ? checkoutUrl : fallbackUrl;

    link.href = targetUrl;

    if (targetUrl.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener";
      return;
    }

    link.removeAttribute("target");
    link.removeAttribute("rel");
  });
}

function initForm() {
  const form = document.querySelector("[data-lead-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("is-sent");
    if (status) {
      status.textContent = "Ihre Angaben wurden nicht uebermittelt. Bitte rufen Sie fuer die Anfrage aktuell 05971 / 9782341 an.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveals();
  initCounters();
  initCaseCheck();
  initCheckoutLinks();
  initForm();
});
