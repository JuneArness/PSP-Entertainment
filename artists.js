/* ==========================================================================
   PSP ENTERTAINMENT | artists.js
   Roster grids and the individual artist pages, drawn from data.js.
   ========================================================================== */
(function () {
  "use strict";
  var DATA = window.PSP || {}, UI = window.PSPUI;
  if (!UI) return;
  var esc = UI.esc, icon = UI.icon, safeUrl = UI.safeUrl;
  var CO = DATA.company || {};
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Roster cards ---------- */
  function card(a, i) {
    return '<a class="artist-card reveal" href="./' + esc(a.page) + '">' +
      '<img src="./' + esc(a.photo) + '" alt="' + esc(a.photoAlt || a.name) + '" loading="lazy" onerror="this.parentNode.classList.add(\'missing\')">' +
      '<span class="a-body"><span class="a-num">' + String(i + 1).padStart(2, "0") + " / " + esc(a.signedTo || "PSP Entertainment") + '</span>' +
      '<span class="a-name">' + esc(a.name) + '</span><span class="a-genre">' + esc(a.genre) + "</span>" +
      '<span class="a-desc">' + esc(a.descriptor) + (a.location ? " · " + esc(a.location) : "") + "</span>" +
      '<span class="a-cta">View artist ' + icon("arrow-right") + "</span></span></a>";
  }
  $$("[data-roster]").forEach(function (el) {
    var f = el.getAttribute("data-roster"), page = document.querySelector("[data-artist-page]");
    var skip = page && el.closest("[data-artist-page]") ? page.getAttribute("data-artist-page") : "";
    var list = (DATA.artists || []).filter(function (a) {
      if (f === "punkin") return /punkin/i.test(a.signedTo || "");
      return a.id !== skip;
    });
    el.innerHTML = list.map(card).join("");
    if (list.length === 2) el.classList.add("two");
  });

  /* ---------- Featured artist (home page) ---------- */
  $$("[data-featured-artist]").forEach(function (el) {
    var a = UI.artistById(el.getAttribute("data-featured-artist")); if (!a) return;
    var latest = (DATA.releases || []).filter(function (r) { return r.artist === a.id && r.featured; })[0];
    $("[data-f-img]", el).innerHTML = '<img src="./' + esc(a.photo) + '" alt="' + esc(a.photoAlt) + '" loading="lazy"><span class="tag red">Featured artist</span>';
    $("[data-f-name]", el).textContent = a.name;
    $("[data-f-quote]", el).textContent = a.statement;
    $("[data-f-meta]", el).textContent = [a.genre, a.location, a.signedTo].filter(Boolean).join(" · ");
    $("[data-f-numbers]", el).innerHTML = (a.bigNumbers || []).map(function (n) { return "<div><b>" + esc(n[0]) + "</b><span>" + esc(n[1]) + "</span></div>"; }).join("");
    $("[data-f-latest]", el).innerHTML = latest ? "Latest album: <strong>" + esc(latest.title) + "</strong>" + (latest.year ? " (" + esc(latest.year) + ")" : "") : "";
    $("[data-f-link]", el).setAttribute("href", "./" + a.page);
  });

  /* ---------- Artist page ---------- */
  var root = $("[data-artist-page]");
  if (!root) return;
  var a = UI.artistById(root.getAttribute("data-artist-page"));
  if (!a) return;

  function set(sel, html) { var el = $(sel, root); if (el) el.innerHTML = html; return el; }
  var hero = $("[data-a-hero]", root);
  if (hero) { hero.src = "./" + a.hero; hero.alt = a.heroAlt || a.name; hero.style.objectPosition = a.heroPosition || "50% 30%"; }
  set("[data-a-name]", esc(a.name));
  set("[data-a-sub]", [a.genre, a.location, a.signedTo].filter(Boolean).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join(""));
  set("[data-a-statement]", esc(a.statement));
  set("[data-a-bio]", (a.bio || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));
  set("[data-a-facts]", (a.facts || []).map(function (f) { return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join(""));
  var nums = set("[data-a-numbers]", (a.bigNumbers || []).map(function (n) { return "<div><b>" + esc(n[0]) + "</b><span>" + esc(n[1]) + "</span></div>"; }).join(""));
  if (nums && !(a.bigNumbers || []).length) nums.hidden = true;

  var inf = $("[data-a-influences-wrap]", root);
  if (inf) {
    if ((a.influences || []).length) set("[data-a-influences]", a.influences.map(function (x) { return '<li class="tag">' + esc(x) + "</li>"; }).join(""));
    else inf.hidden = true;
  }

  function linkRow(list, emptyText) {
    list = (list || []).filter(function (s) { return safeUrl(s.url); });
    if (!list.length) return '<p class="note">' + esc(emptyText) + "</p>";
    return list.map(function (s) { return '<a class="social" href="' + esc(safeUrl(s.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + icon("external") + '<span class="sr-only"> (opens in a new tab)</span></a>'; }).join("");
  }
  set("[data-a-streaming]", linkRow(a.streaming, "Streaming links coming soon."));
  set("[data-a-socials]", linkRow(a.socials, "Social links coming soon."));

  var gal = $("[data-a-gallery]", root);
  if (gal) gal.innerHTML = UI.galleryItems(a.gallery || []);

  set("[data-a-booking-label]", esc(a.booking || "Booking through PSP Entertainment"));
  set("[data-a-booking-links]",
    (CO.email ? '<a href="mailto:' + esc(CO.email) + "?subject=" + encodeURIComponent("Booking inquiry: " + a.name) + '">' + icon("mail") + esc(CO.email) + "</a>" : "") +
    (CO.phone ? '<a href="' + esc(UI.telHref(CO.phone)) + '">' + icon("phone") + esc(CO.phone) + "</a>" : ""));
  var bk = $("[data-a-booking-btn]", root); if (bk) bk.setAttribute("href", "./contact.html?type=booking&artist=" + encodeURIComponent(a.id));
})();
