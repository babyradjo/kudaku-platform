/* =============================================================================
   KUDAKU — Site behaviour (V0)
   - Injects shared header/footer from content.js
   - Renders structured lists (DNA, programs, days, impact, partners, growth)
   - Handles navigation, scroll state, mobile menu, and reveal animations
   ============================================================================= */
(function () {
  "use strict";

  var C = window.KUDAKU_CONTENT;
  if (!C) return;

  function currentPage() {
    var path = window.location.pathname;
    var name = path.substring(path.lastIndexOf("/") + 1);
    return name || "index.html";
  }

  function isCurrent(href) {
    return href === currentPage() ||
      (currentPage() === "index.html" && (href === "index.html" || href === "./"));
  }

  /* ----------------------------- Header ----------------------------- */
  function buildHeader() {
    var links = C.nav.map(function (item) {
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
        '<nav class="site-nav" id="site-nav" aria-label="Primary">' +
          '<ul class="nav-list">' + links + "</ul>" +
        "</nav>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle menu">' +
          "<span></span><span></span><span></span>" +
        "</button>" +
      "</div>"
    );
  }

  /* ----------------------------- Footer ----------------------------- */
  function buildFooter() {
    var links = C.nav.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
    }).join("");

    return (
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<p class="footer-logo">KUDAKU</p>' +
          '<p class="footer-sub">Kuningan Dapur Kuliner</p>' +
          '<p class="footer-desc">' + C.brand.taglineEn + "</p>" +
        "</div>" +
        '<div class="footer-col">' +
          '<h4 class="footer-heading">Platform</h4>' +
          '<ul class="footer-links">' + links + "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          '<h4 class="footer-heading">' + C.footer.initiatedLabel + "</h4>" +
          '<p class="footer-text">' + C.brand.initiator + "</p>" +
          '<p class="footer-text footer-muted">' + C.brand.location + "</p>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        '<span class="footer-copy">&copy; <span data-year></span> ' + C.brand.name + " &middot; " + C.brand.fullName + "</span>" +
        '<span class="footer-principle">' + C.footer.principle + "</span>" +
      "</div>"
    );
  }

  /* ----------------------------- Renderers ----------------------------- */
  function renderDna(el) {
    el.innerHTML = C.dna.map(function (d) {
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
    el.innerHTML = C.programs.map(function (p) {
      return (
        '<article class="program-card" data-reveal>' +
          '<span class="program-index">' + p.n + "</span>" +
          '<h3 class="program-name">' + p.name + "</h3>" +
          '<p class="program-text">' + p.text + "</p>" +
        "</article>"
      );
    }).join("");
  }

  function renderDays(el) {
    el.innerHTML = C.days.map(function (d, i) {
      return (
        '<article class="day-block" data-reveal>' +
          '<div class="day-media">' +
            '<div class="ph" data-ph="' + (i + 1) + '"><span class="ph-label">Day ' + (i + 1) + "</span></div>" +
          "</div>" +
          '<div class="day-body">' +
            '<span class="day-kicker">' + d.day + "</span>" +
            '<h3 class="day-name">' + d.name + "</h3>" +
            '<span class="day-gloss">' + d.gloss + "</span>" +
            '<p class="day-text">' + d.text + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderImpact(el) {
    el.innerHTML = C.impact.map(function (x, i) {
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
    el.innerHTML = C.partners.map(function (x, i) {
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
    el.innerHTML = C.growth.map(function (g, i) {
      return (
        '<li class="growth-step" data-reveal>' +
          '<span class="growth-dot"></span>' +
          '<span class="growth-stage">' + g.stage + "</span>" +
          '<span class="growth-note">' + g.note + "</span>" +
        "</li>"
      );
    }).join("");
  }

  function renderPrinciple(el) {
    el.innerHTML = C.brand.principle.map(function (line) {
      return "<span>" + line + "</span>";
    }).join('<span class="principle-sep" aria-hidden="true">·</span>');
  }

  /* ----------------------------- Init ----------------------------- */
  function initInteractions() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.classList.toggle("nav-locked", open);
      });
    }

    var onScroll = function () {
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

  document.addEventListener("DOMContentLoaded", function () {
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
      else if (kind === "principle") renderPrinciple(el);
    });

    initInteractions();
  });
})();
