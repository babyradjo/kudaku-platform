/* =============================================================================
   KUDAKU — Site behaviour (V0.3 · bilingual ID/EN)
   - Resolves active language (URL ?lang → localStorage → default "id")
   - Injects header/footer + a global ID | EN language switch
   - Renders structured lists from the active dataset
   - Swaps all static [data-i18n] copy, document title, and meta description
   ============================================================================= */
(function () {
  "use strict";

  var C = window.KUDAKU_CONTENT;
  if (!C) return;

  var lang = null;   // "id" | "en"
  var L = null;      // active dataset (C.id | C.en)

  /* --------------------------- Language state --------------------------- */
  function resolveLang() {
    var m = window.location.search.match(/[?&]lang=(id|en)/);
    if (m && m[1]) return m[1];
    try {
      var stored = window.localStorage.getItem(C.meta.storageKey);
      if (stored === "id" || stored === "en") return stored;
    } catch (e) { /* private mode */ }
    return C.meta.defaultLang;
  }

  function pageKey() {
    var path = window.location.pathname;
    var name = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    if (name === "404.html") return "error404";
    var base = name.replace(/\.html$/, "");
    return base || "index";
  }

  function currentPage() {
    var path = window.location.pathname;
    return path.substring(path.lastIndexOf("/") + 1) || "index.html";
  }

  function isCurrent(href) {
    return href === currentPage() ||
      (currentPage() === "index.html" && (href === "index.html" || href === "./"));
  }

  /* --------------------------- Language switch --------------------------- */
  function langSwitchMarkup(modifier) {
    var cls = modifier ? "lang-switch " + modifier : "lang-switch";
    return (
      '<div class="' + cls + '" role="group" aria-label="' + L.ui.langLabel + '">' +
        '<button type="button" class="lang-btn' + (lang === "id" ? " is-active" : "") + '" data-lang="id" aria-pressed="' + (lang === "id" ? "true" : "false") + '" aria-label="Bahasa Indonesia">ID</button>' +
        '<span class="lang-sep" aria-hidden="true">|</span>' +
        '<button type="button" class="lang-btn' + (lang === "en" ? " is-active" : "") + '" data-lang="en" aria-pressed="' + (lang === "en" ? "true" : "false") + '" aria-label="English">EN</button>' +
      "</div>"
    );
  }

  /* ----------------------------- Header ----------------------------- */
  function buildHeader() {
    var links = L.nav.map(function (item) {
      var cls = isCurrent(item.href) ? "nav-link is-active" : "nav-link";
      return '<li><a class="' + cls + '" href="' + item.href + '">' + item.label + "</a></li>";
    }).join("");

    return (
      '<div class="header-inner">' +
        '<a class="brand" href="index.html" aria-label="KUDAKU — home">' +
          '<img class="brand-mark" src="assets/img/brand/kudaku-mark.svg" alt="" width="40" height="40" />' +
          '<span class="brand-text">' +
            '<span class="brand-word">KUDAKU</span>' +
            '<span class="brand-sub">Kuningan Dapur Kuliner</span>' +
          "</span>" +
        "</a>" +
        '<nav class="site-nav" id="site-nav" aria-label="' + L.ui.primaryNav + '">' +
          '<ul class="nav-list">' + links + "</ul>" +
          langSwitchMarkup("lang-switch--nav") +
        "</nav>" +
        langSwitchMarkup("lang-switch--bar") +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="' + L.ui.toggleMenu + '">' +
          "<span></span><span></span><span></span>" +
        "</button>" +
      "</div>"
    );
  }

  /* ----------------------------- Footer ----------------------------- */
  function buildFooter() {
    var links = L.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
    }).join("");

    return (
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<p class="footer-logo">KUDAKU</p>' +
          '<p class="footer-sub">Kuningan Dapur Kuliner</p>' +
          '<p class="footer-desc">' + L.brand.tagline + "</p>" +
        "</div>" +
        '<div class="footer-col">' +
          '<h4 class="footer-heading">Platform</h4>' +
          '<ul class="footer-links">' + links + "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          '<h4 class="footer-heading">' + L.footer.initiatedLabel + "</h4>" +
          '<p class="footer-text">' + L.brand.initiator + "</p>" +
          '<p class="footer-text footer-muted">' + L.brand.location + "</p>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        '<span class="footer-copy">&copy; <span data-year></span> ' + L.brand.name + " &middot; " + L.brand.fullName + "</span>" +
        '<span class="footer-principle">' + L.footer.principle + "</span>" +
      "</div>"
    );
  }

  /* ----------------------------- Renderers ----------------------------- */
  function renderDna(el) {
    el.innerHTML = L.dna.map(function (d) {
      return (
        '<li class="dna-item" data-reveal>' +
          '<span class="dna-code">' + d.code + "</span>" +
          '<h3 class="dna-title">' + d.title + "</h3>" +
          '<p class="dna-text">' + d.text + "</p>" +
        "</li>"
      );
    }).join("");
  }

  function renderPrograms(el) {
    el.innerHTML = L.programs.map(function (p) {
      var sub = p.id ? '<span class="program-subtitle">' + p.id + "</span>" : "";
      var concept = p.concept ? '<p class="program-concept">' + p.concept + "</p>" : "";
      return (
        '<article class="program-card" data-reveal>' +
          '<span class="program-index">' + p.n + "</span>" +
          '<h3 class="program-name">' + p.name + "</h3>" +
          sub +
          '<p class="program-text">' + p.text + "</p>" +
          concept +
        "</article>"
      );
    }).join("");
  }

  function renderDays(el) {
    el.innerHTML = L.days.map(function (d, i) {
      var gloss = d.gloss ? '<span class="day-gloss">' + d.gloss + "</span>" : "";
      var moments = d.moments && d.moments.length
        ? '<div class="day-moments-wrap">' +
            '<span class="day-moments-label">' + L.ui.signatureMoments + "</span>" +
            '<ul class="day-moments">' + d.moments.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>" +
          "</div>"
        : "";
      return (
        '<article class="day-block" data-reveal>' +
          '<div class="day-media">' +
            '<div class="ph" data-ph="' + (i + 1) + '"><span class="ph-label">' + L.ui.dayLabel + " " + (i + 1) + "</span></div>" +
          "</div>" +
          '<div class="day-body">' +
            '<span class="day-kicker">' + d.day + "</span>" +
            '<h3 class="day-name">' + d.name + "</h3>" +
            gloss +
            '<span class="day-subtitle">' + d.subtitle + "</span>" +
            '<p class="day-text">' + d.text + "</p>" +
            moments +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderImpact(el) {
    el.innerHTML = L.impact.map(function (x, i) {
      return (
        '<div class="impact-item" data-reveal>' +
          '<span class="impact-index">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<h3 class="impact-title">' + x.title + "</h3>" +
          '<p class="impact-text">' + x.text + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderPartners(el) {
    el.innerHTML = L.partners.map(function (x, i) {
      return (
        '<div class="partner-item" data-reveal>' +
          '<span class="partner-index">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<h3 class="partner-title">' + x.title + "</h3>" +
          '<p class="partner-text">' + x.text + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderGrowth(el) {
    el.innerHTML = L.growth.map(function (g) {
      return (
        '<li class="growth-step" data-reveal>' +
          '<span class="growth-dot"></span>' +
          '<span class="growth-stage">' + g.stage + "</span>" +
          '<span class="growth-note">' + g.note + "</span>" +
        "</li>"
      );
    }).join("");
  }

  function renderLifecycle(el) {
    el.innerHTML = L.lifecycle.phases.map(function (p) {
      return (
        '<div class="lifecycle-phase" data-reveal>' +
          '<span class="lifecycle-dot"></span>' +
          '<h3 class="lifecycle-phase-name">' + p.phase + "</h3>" +
          '<p class="lifecycle-phase-text">' + p.note + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderPrinciple(el) {
    el.innerHTML = L.brand.principle.map(function (line) {
      return "<span>" + line + "</span>";
    }).join('<span class="principle-sep" aria-hidden="true">·</span>');
  }

  /* --------------------------- Static text swap --------------------------- */
  function applyStaticText() {
    var page = L.pages[pageKey()];
    if (!page) return;

    document.title = page.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && page.description) metaDesc.setAttribute("content", page.description);

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = page[key];
      if (val !== undefined && val !== null && val !== "") {
        el.innerHTML = val;
      }
    });
  }

  /* ----------------------------- Render all ----------------------------- */
  function renderAll() {
    var header = document.getElementById("site-header");
    var footer = document.getElementById("site-footer");
    if (header) header.innerHTML = buildHeader();
    if (footer) footer.innerHTML = buildFooter();

    document.querySelectorAll("[data-render]").forEach(function (el) {
      var kind = el.getAttribute("data-render");
      if (kind === "dna") renderDna(el);
      else if (kind === "programs") renderPrograms(el);
      else if (kind === "days") renderDays(el);
      else if (kind === "impact") renderImpact(el);
      else if (kind === "partners") renderPartners(el);
      else if (kind === "growth") renderGrowth(el);
      else if (kind === "lifecycle") renderLifecycle(el);
      else if (kind === "principle") renderPrinciple(el);
    });

    applyStaticText();
  }

  function setLang(next) {
    if (next !== "id" && next !== "en") next = C.meta.defaultLang;
    if (next === lang) return;
    lang = next;
    L = C[lang];
    try { window.localStorage.setItem(C.meta.storageKey, lang); } catch (e) { /* private mode */ }
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.toString());
    } catch (e) { /* ignore */ }
    renderAll();
  }

  /* --------------------------- Interactions --------------------------- */
  function initInteractions() {
    document.addEventListener("click", function (e) {
      var t = e.target;
      var lb = t && t.closest ? t.closest(".lang-btn") : null;
      if (lb) { setLang(lb.getAttribute("data-lang")); return; }

      var tg = t && t.closest ? t.closest(".nav-toggle") : null;
      if (tg) {
        var header = document.querySelector(".site-header");
        var open = header.classList.toggle("nav-open");
        tg.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("nav-locked", open);
      }
    });

    var onScroll = function () {
      var header = document.querySelector(".site-header");
      if (!header) return;
      if (window.scrollY > 40) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if ("IntersectionObserver" in window) {
      var revealEls = document.querySelectorAll("[data-reveal]");
      revealEls.forEach(function (el) { el.classList.add("pre-reveal"); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ------------------------------- Init ------------------------------- */
  function ready() {
    lang = resolveLang();
    L = C[lang];
    renderAll();
    initInteractions();

    var d = document.documentElement;
    d.classList.remove("app-loading");
    d.classList.add("app-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
