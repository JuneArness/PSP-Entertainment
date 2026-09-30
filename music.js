/* ==========================================================================
   PSP ENTERTAINMENT | music.js
   Releases, videos and news lists (with filters), drawn from data.js.
   Any element can ask for a list with data attributes, e.g.
     <div data-releases data-artist="june-arness" data-limit="4"></div>
   ========================================================================== */
(function () {
  "use strict";
  var DATA = window.PSP || {}, UI = window.PSPUI;
  if (!UI) return;
  var esc = UI.esc;
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function hide(el) { var w = el.closest("[data-hide-if-empty]"); if (w) w.hidden = true; }

  /* ---------- Releases ---------- */
  $$("[data-releases]").forEach(function (el) {
    var artist = el.getAttribute("data-artist"), limit = +el.getAttribute("data-limit") || 0, showArtist = !artist;
    var filterBar = el.getAttribute("data-filter-bar") ? document.getElementById(el.getAttribute("data-filter-bar")) : null;
    var note = el.getAttribute("data-results") ? document.getElementById(el.getAttribute("data-results")) : null;
    var all = (DATA.releases || []).filter(function (r) { return !artist || r.artist === artist; });
    if (!all.length) { el.innerHTML = '<p class="empty-state">Releases will appear here soon.</p>'; hide(el); return; }
    function draw(f) {
      var list = all.filter(function (r) { return f === "all" || r.artist === f; });
      if (limit) list = list.slice(0, limit);
      el.innerHTML = list.map(function (r) { return UI.releaseCard(r, showArtist); }).join("");
      if (note) note.textContent = "Showing " + list.length + " release" + (list.length === 1 ? "" : "s") + (f === "all" ? "" : " by " + (UI.artistById(f) || {}).name) + ".";
      UI.reveal();
    }
    if (filterBar) {
      var ids = []; all.forEach(function (r) { if (ids.indexOf(r.artist) < 0) ids.push(r.artist); });
      filterBar.innerHTML = '<button type="button" class="filter" data-f="all" aria-pressed="true">All artists</button>' +
        ids.map(function (id) { var a = UI.artistById(id) || { name: id }; return '<button type="button" class="filter" data-f="' + esc(id) + '" aria-pressed="false">' + esc(a.name) + "</button>"; }).join("");
      filterBar.addEventListener("click", function (e) {
        var b = e.target.closest("[data-f]"); if (!b) return;
        $$("[data-f]", filterBar).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        draw(b.getAttribute("data-f"));
      });
    }
    draw("all");
  });

  /* ---------- Videos ---------- */
  $$("[data-videos]").forEach(function (el) {
    var artist = el.getAttribute("data-artist"), limit = +el.getAttribute("data-limit") || 0, featured = el.hasAttribute("data-featured-only");
    var list = (DATA.videos || []).map(function (v, i) { return { v: v, i: i }; }).filter(function (x) {
      if (artist && x.v.artist !== artist) return false;
      if (featured && !x.v.featured) return false;
      return x.v.file || x.v.youtube;
    });
    if (limit) list = list.slice(0, limit);
    if (!list.length) { hide(el); return; }
    el.innerHTML = list.map(function (x) { return UI.videoCard(x.v, x.i); }).join("");
  });

  /* ---------- News ---------- */
  $$("[data-news]").forEach(function (el) {
    var artist = el.getAttribute("data-artist"), limit = +el.getAttribute("data-limit") || 0, realOnly = el.hasAttribute("data-real-only");
    var filterBar = el.getAttribute("data-filter-bar") ? document.getElementById(el.getAttribute("data-filter-bar")) : null;
    var all = (DATA.news || []).filter(function (n) { return (!artist || n.artist === artist) && (!realOnly || !n.placeholder); });
    if (!all.length) { hide(el); return; }
    function draw(cat) {
      var list = all.filter(function (n) { return cat === "all" || n.category === cat; });
      if (limit) list = list.slice(0, limit);
      el.innerHTML = list.length ? list.map(UI.newsCard).join("") : '<p class="empty-state">No stories in this category yet.</p>';
      UI.reveal();
    }
    if (filterBar) {
      var cats = ["New Releases", "Artist News", "PSP Entertainment News", "Events", "Media", "Announcements"];
      filterBar.innerHTML = '<button type="button" class="filter" data-c="all" aria-pressed="true">All</button>' +
        cats.map(function (c) { return '<button type="button" class="filter" data-c="' + esc(c) + '" aria-pressed="false">' + esc(c) + "</button>"; }).join("");
      filterBar.addEventListener("click", function (e) {
        var b = e.target.closest("[data-c]"); if (!b) return;
        $$("[data-c]", filterBar).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        draw(b.getAttribute("data-c"));
      });
    }
    draw("all");
  });
})();
