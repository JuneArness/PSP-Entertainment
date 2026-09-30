/* ==========================================================================
   PSP ENTERTAINMENT | main.js
   Shared on every page: navigation, mobile menu, company details, cards
   for releases/videos/news, the video + photo viewer, contact form and
   scroll reveals. Content comes from data.js. No libraries.
   ========================================================================== */
(function () {
  "use strict";

  var DATA = window.PSP || {};
  var CO = DATA.company || {};
  var ICONS = /*ICONS*/{"play":"<path d=\"M7 4.5v15l13-7.5z\"/>","arrow-right":"<path d=\"M5 12h14M13 6l6 6-6 6\"/>","x":"<path d=\"M6 6l12 12M18 6L6 18\"/>","mail":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"1\"/><path d=\"M3.5 6.5l8.5 6 8.5-6\"/>","phone":"<path d=\"M5 3h3.6l1.9 4.8-2.4 1.5a11.3 11.3 0 0 0 6.6 6.6l1.5-2.4L21 15.4V19a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 3 5.2 2 2 0 0 1 5 3z\"/>","check":"<path d=\"M5 12.5l4.5 4.5L19 7.5\"/>","info":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5.5M12 7.6v.1\"/>","external":"<path d=\"M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5\"/>","download":"<path d=\"M12 3v12M7 10l5 5 5-5M4 20h16\"/>","copy":"<rect x=\"8\" y=\"8\" width=\"12\" height=\"12\" rx=\"1\"/><path d=\"M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3\"/>","plus":"<path d=\"M12 5v14M5 12h14\"/>","headphones":"<path d=\"M4 15v-3a8 8 0 0 1 16 0v3\"/><rect x=\"3\" y=\"14\" width=\"4\" height=\"6\" rx=\"1\"/><rect x=\"17\" y=\"14\" width=\"4\" height=\"6\" rx=\"1\"/>"}/*END-ICONS*/;

  /* ---------- Helpers ---------- */
  function esc(v) { return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function safeUrl(u) { u = String(u || "").trim(); if (!u) return ""; if (/^(https?:|mailto:|tel:)/i.test(u)) return u; if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return ""; return u; }
  function icon(name, cls) { return '<svg class="icon' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>"; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function reduced() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function ext(url, label) { return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + label + '<span class="sr-only"> (opens in a new tab)</span></a>'; }
  function artistById(id) { return (DATA.artists || []).filter(function (a) { return a.id === id; })[0] || null; }
  function telHref(p) { return "tel:" + String(p || "").replace(/[^\d+]/g, ""); }
  function ytId(u) { var m = String(u || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : ""; }

  /* ---------- Header ---------- */
  var header = $(".site-header");
  function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $$(".brand img").forEach(function (img) {
    function fail() { img.closest(".brand").classList.add("logo-missing"); }
    img.addEventListener("error", fail); if (img.complete && img.naturalWidth === 0) fail();
  });

  /* ---------- Mobile menu ---------- */
  var toggle = $(".menu-toggle"), menu = $("#mobile-menu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open); menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("no-scroll", open);
    if (header) header.classList.toggle("is-solid", open);
    $$("a, button", menu).forEach(function (el) { el.tabIndex = open ? 0 : -1; });
    if (open) setTimeout(function () { var f = $("a", menu); if (f) f.focus(); }, 80);
  }
  if (toggle && menu) {
    setMenu(false);
    toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (e.key === "Escape") { setMenu(false); toggle.focus(); }
      if (e.key === "Tab") {
        var items = [toggle].concat($$("a", menu)), i = items.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
        else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
      }
    });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1180 && toggle.getAttribute("aria-expanded") === "true") setMenu(false); });
  }

  /* ---------- Company details (footer, contact, booking boxes) ---------- */
  $$("[data-co-email]").forEach(function (el) { el.innerHTML = CO.email ? '<a href="mailto:' + esc(CO.email) + '">' + icon("mail") + esc(CO.email) + "</a>" : ""; });
  $$("[data-co-phone]").forEach(function (el) { el.innerHTML = CO.phone ? '<a href="' + esc(telHref(CO.phone)) + '">' + icon("phone") + esc(CO.phone) + "</a>" : ""; });
  $$("[data-co-socials]").forEach(function (el) {
    var list = (CO.socials || []).filter(function (s) { return safeUrl(s.url); });
    if (!list.length) { el.innerHTML = '<p class="note">' + esc(el.getAttribute("data-empty") || "Social links coming soon.") + "</p>"; return; }
    el.innerHTML = list.map(function (s) { return '<a class="social" href="' + esc(safeUrl(s.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + '<span class="sr-only"> (opens in a new tab)</span></a>'; }).join("");
  });
  $$("[data-dev-credit]").forEach(function (el) { if (CO.developerCredit) el.textContent = CO.developerCredit; });
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Card builders (used by artists.js and music.js) ---------- */
  var LINK_LABELS = { spotify: "Spotify", appleMusic: "Apple Music", youtubeMusic: "YouTube Music", youtube: "YouTube", pandora: "Pandora", iheart: "iHeartRadio" };
  function releaseCard(r, showArtist) {
    var a = artistById(r.artist) || {};
    var links = Object.keys(LINK_LABELS).filter(function (k) { return r.links && safeUrl(r.links[k]); });
    var cover = r.cover
      ? '<img src="./' + esc(r.cover) + '" alt="' + esc(r.coverAlt || (r.title + " cover art")) + '" loading="lazy" width="600" height="600">'
      : '<div class="cover-card" aria-hidden="true"><small>' + esc(a.name || "PSP Entertainment") + '</small><span class="cc-lines"></span><b>' + esc(r.title) + "</b></div>";
    var meta = [r.type, r.year].filter(Boolean).join(" · ");
    return '<article class="release reveal">' +
      '<div class="cover">' + cover + (r.comingSoon ? '<span class="tag solid">Coming soon</span>' : "") + "</div>" +
      "<h3>" + esc(r.title) + "</h3>" +
      '<p class="r-meta">' + [showArtist && a.page ? '<a href="./' + esc(a.page) + '">' + esc(a.name) + "</a>" : "", esc(meta), esc(r.note || "")].filter(Boolean).join(" · ") + "</p>" +
      '<div class="chips">' + (links.length ? links.map(function (k) { return '<a class="chip" href="' + esc(safeUrl(r.links[k])) + '" target="_blank" rel="noopener noreferrer">' + LINK_LABELS[k] + '<span class="sr-only"> — ' + esc(r.title) + " (opens in a new tab)</span></a>"; }).join("") : '<span class="chip soon">' + (r.comingSoon ? "Stay tuned" : "Links coming soon") + "</span>") + "</div>" +
      "</article>";
  }
  function videoCard(v, i) {
    var a = artistById(v.artist);
    return '<button type="button" class="video-card reveal' + (v.vertical ? " vertical" : "") + '" data-video="' + i + '" aria-label="Play video: ' + esc(v.title + (v.subtitle ? ", " + v.subtitle : "")) + '">' +
      (v.poster ? '<img src="./' + esc(v.poster) + '" alt="" loading="lazy">' : "") +
      '<span class="play" aria-hidden="true">' + icon("play", "fill") + "</span>" +
      '<span class="v-meta"><span class="v-title">' + esc(v.title) + '</span><span class="v-sub">' + esc([a && a.name !== v.title ? a.name : "", v.subtitle].filter(Boolean).join(" · ")) + "</span></span></button>";
  }
  function newsCard(n) {
    var a = artistById(n.artist);
    return '<article class="news-card reveal' + (n.placeholder ? " placeholder" : "") + '">' +
      (n.image ? '<div class="n-img"><img src="./' + esc(n.image) + '" alt="' + esc(n.imageAlt || "") + '" loading="lazy"></div>' : '<div class="n-img empty" aria-hidden="true"><span>PSP</span></div>') +
      '<div class="n-body"><div class="n-tags"><span class="tag red">' + esc(n.category) + "</span>" + (n.past ? '<span class="tag">Past event</span>' : "") + (n.placeholder ? '<span class="tag dashed">Placeholder</span>' : "") + "</div>" +
      (n.date ? '<p class="n-date">' + esc(n.date) + "</p>" : "") +
      "<h3>" + esc(n.title) + "</h3><p>" + esc(n.summary) + "</p>" +
      (a ? '<a class="link" href="./' + esc(a.page) + '">' + esc(a.name) + icon("arrow-right") + "</a>" : "") + "</div></article>";
  }
  function galleryItems(list) {
    return list.map(function (g, i) {
      var cls = i === 0 ? " tall" : (i % 5 === 3 ? " wide" : "");
      return '<button type="button" class="g-item' + cls + '" data-full="./' + esc(g[0]) + '" data-caption="' + esc(g[2] || "") + '" aria-label="View larger: ' + esc(g[1]) + '"><img src="./' + esc(g[0]) + '" alt="' + esc(g[1]) + '" loading="lazy"><span class="g-cap" aria-hidden="true">' + esc(g[2] || "") + "</span></button>";
    }).join("");
  }

  /* ---------- Modal: videos and photos ---------- */
  var modal = document.createElement("div");
  modal.className = "modal"; modal.hidden = true;
  modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-label", "Media viewer");
  modal.innerHTML = '<p class="m-count" aria-live="polite"></p><button type="button" class="m-btn m-close" aria-label="Close">' + icon("x") + '</button>' +
    '<button type="button" class="m-btn m-prev" aria-label="Previous">' + icon("arrow-right") + '</button><div class="modal-stage"></div>' +
    '<button type="button" class="m-btn m-next" aria-label="Next">' + icon("arrow-right") + "</button>";
  document.body.appendChild(modal);
  var stage = $(".modal-stage", modal), mCount = $(".m-count", modal), opener = null, photoSet = null, photoIdx = 0;

  function openModal(html, trigger, isPhotos) {
    opener = trigger; stage.innerHTML = html; modal.hidden = false;
    $(".m-prev", modal).hidden = $(".m-next", modal).hidden = !isPhotos;
    mCount.hidden = !isPhotos;
    document.body.classList.add("no-scroll"); $(".m-close", modal).focus();
  }
  function closeModal() {
    stage.innerHTML = ""; modal.hidden = true; photoSet = null;
    document.body.classList.remove("no-scroll"); if (opener) opener.focus();
  }
  function playVideo(v, trigger) {
    var html, id = ytId(v.youtube);
    if (v.file) html = '<video src="./' + esc(v.file) + '" controls autoplay playsinline preload="metadata"' + (v.poster ? ' poster="./' + esc(v.poster) + '"' : "") + "></video>";
    else if (id) html = '<div class="yt"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="' + esc(v.title) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>';
    else return;
    var a = artistById(v.artist);
    openModal(html + '<p class="modal-caption">' + esc([v.title, a && a.name !== v.title ? a.name : "", v.subtitle].filter(Boolean).join(" · ")) + "</p>", trigger, false);
  }
  function showPhoto(i) {
    photoIdx = (i + photoSet.length) % photoSet.length;
    var b = photoSet[photoIdx], img = $("img", b);
    stage.innerHTML = '<img src="' + esc(b.getAttribute("data-full")) + '" alt="' + esc(img ? img.alt : "") + '">' + '<p class="modal-caption">' + esc(img ? img.alt : "") + "</p>";
    mCount.textContent = (photoIdx + 1) + " / " + photoSet.length;
  }
  document.addEventListener("click", function (e) {
    var vb = e.target.closest("[data-video]");
    if (vb) { var v = (DATA.videos || [])[+vb.getAttribute("data-video")]; if (v) playVideo(v, vb); return; }
    var gb = e.target.closest(".g-item");
    if (gb) { photoSet = $$(".g-item", gb.closest(".gallery")); openModal("", gb, true); showPhoto(photoSet.indexOf(gb)); }
  });
  $(".m-close", modal).addEventListener("click", closeModal);
  $(".m-prev", modal).addEventListener("click", function () { showPhoto(photoIdx - 1); });
  $(".m-next", modal).addEventListener("click", function () { showPhoto(photoIdx + 1); });
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    else if (photoSet && e.key === "ArrowLeft") showPhoto(photoIdx - 1);
    else if (photoSet && e.key === "ArrowRight") showPhoto(photoIdx + 1);
    else if (e.key === "Tab") {
      var f = $$("button:not([hidden]), video, iframe", modal), i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  var x0 = null;
  modal.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  modal.addEventListener("touchend", function (e) { if (x0 === null || !photoSet) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) showPhoto(photoIdx + (dx < 0 ? 1 : -1)); x0 = null; });

  /* ---------- Behind-the-scenes galleries ---------- */
  $$("[data-bts-gallery]").forEach(function (el) { el.innerHTML = galleryItems(DATA.behindTheScenes || []); });

  /* ---------- Contact form ---------- */
  var form = $("#contact-form");
  if (form) {
    var params = {}; (location.search || "").replace(/^\?/, "").split("&").forEach(function (p) { var kv = p.split("="); if (kv[0]) params[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || "").replace(/\+/g, " ")); });
    var artistSel = $("#f-artist", form);
    artistSel.innerHTML = '<option value="">Not about a specific artist</option>' + (DATA.artists || []).map(function (a) { return '<option value="' + esc(a.name) + '" data-id="' + esc(a.id) + '">' + esc(a.name) + "</option>"; }).join("");
    if (params.artist) $$("option", artistSel).forEach(function (o) { if (o.getAttribute("data-id") === params.artist) artistSel.value = o.value; });
    var typeSel = $("#f-type", form);
    if (params.type) $$("option", typeSel).forEach(function (o) { if (o.value && o.value.toLowerCase().indexOf(params.type.toLowerCase()) > -1) typeSel.value = o.value; });
    var status = $("#form-status"), endpoint = safeUrl(CO.formEndpoint);
    function show(kind, msg) { status.className = "form-status show " + kind; status.innerHTML = icon(kind === "ok" ? "check" : "info") + "<p>" + msg + "</p>"; }
    function check(f) {
      var v = f.value.trim(), ok = !(f.required && !v);
      if (ok && v && f.type === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      if (ok && v && f.type === "tel") ok = v.replace(/\D/g, "").length >= 10;
      var w = f.closest(".field"); if (w) w.classList.toggle("bad", !ok);
      f.setAttribute("aria-invalid", ok ? "false" : "true"); return ok;
    }
    $$("input, select, textarea", form).forEach(function (f) {
      if (f.name === "_gotcha") return;
      f.addEventListener("blur", function () { if (f.value.trim()) check(f); });
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") check(f); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if ($('[name="_gotcha"]', form).value) return;
      var bad = $$("input, select, textarea", form).filter(function (f) { return f.name !== "_gotcha" && !check(f); });
      if (bad.length) { bad[0].focus(); show("err", "Please check the highlighted field" + (bad.length > 1 ? "s" : "") + "."); return; }
      var fd = new FormData(form);
      if (!endpoint) {
        // Not connected yet: offer the visitor's email app with everything filled in (nothing is sent automatically).
        var subject = (fd.get("type") || "Inquiry") + (fd.get("artist") ? " — " + fd.get("artist") : "") + " — from " + fd.get("name");
        var body = "Name: " + fd.get("name") + "\nEmail: " + fd.get("email") + "\nPhone: " + (fd.get("phone") || "") + "\nOrganization: " + (fd.get("organization") || "") + "\nInquiry: " + fd.get("type") + "\nArtist: " + (fd.get("artist") || "") + "\n\n" + fd.get("message");
        var href = "mailto:" + CO.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        show("info", "Online sending isn’t set up yet, so this message has <strong>not been sent</strong>. <a href=\"" + esc(href) + "\">Open it in your email app</a> to send it to " + esc(CO.email) + ", or call " + esc(CO.phone) + ".");
        return;
      }
      var btn = $('button[type="submit"]', form); btn.disabled = true;
      fetch(endpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw 0; form.reset(); show("ok", "Thank you. Your message was sent to PSP Entertainment."); })
        .catch(function () { show("err", "Sorry, that didn’t go through. Please email " + esc(CO.email) + " directly."); })
        .then(function () { btn.disabled = false; });
    });
  }

  /* ---------- Copy-to-clipboard (Press page bios) ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]"); if (!b) return;
    var src = document.getElementById(b.getAttribute("data-copy")); if (!src) return;
    var text = src.innerText.trim(), label = $("span", b);
    function done(ok) { if (label) { label.textContent = ok ? "Copied" : "Select and copy"; setTimeout(function () { label.textContent = "Copy bio"; }, 2200); } }
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); }); else done(false);
  });

  /* ---------- Scroll reveal (runs after the other scripts add content) ---------- */
  function reveal() {
    var els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || reduced()) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  window.PSPUI = { esc: esc, safeUrl: safeUrl, icon: icon, ext: ext, artistById: artistById, releaseCard: releaseCard, videoCard: videoCard, newsCard: newsCard, galleryItems: galleryItems, reveal: reveal, telHref: telHref };
  document.addEventListener("DOMContentLoaded", reveal);
  if (document.readyState !== "loading") setTimeout(reveal, 0);
})();
