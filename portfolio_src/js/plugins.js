// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".clock-settings .ast a");
const original = document.querySelector(".full-img");
const caption = document.querySelector("modal-caption");
previews.forEach(preview => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./${originalSrc}`
  });
});

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove('open');

  }
});
