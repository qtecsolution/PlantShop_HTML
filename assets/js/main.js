document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".shortBySelect");
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });
});
