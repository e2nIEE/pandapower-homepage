(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (btn) btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  var nav = document.querySelector(".nav-toggle");
  if (nav) nav.addEventListener("click", function () {
    var open = document.getElementById("site-nav").classList.toggle("open");
    nav.setAttribute("aria-expanded", open);
  });
})();
