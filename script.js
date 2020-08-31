var isBig = false;

function big(b) {
  if (b) {
    rainbow.classList.remove("hidden");
    nav.classList.add("big");
    header.classList.add("big");
    document.body.classList.add("big");
  } else if (header.classList.contains("big")) {
    nav.classList.remove("big");
    header.classList.remove("big");
    document.body.classList.remove("big");
    rainbow.classList.add("hidden");
  }
  isBig = b;
}
big(true);

function toggleBig() {
  isBig = !isBig
  big(isBig);
}

var wasZero = true;
var lastScroll = 0;
document.addEventListener("scroll", (e) => {
  if(document.scrollingElement.scrollTop == 0 && lastScroll == 1) {
    big(true);
    wasZero = true;
  } else if(document.scrollingElement.scrollTop == 0) {
      document.scrollingElement.scrollTop = 1;
  } else {
    if (wasZero) {
      big(false);
      document.scrollingElement.scrollTop = 1;
      wasZero = false;
      return false;
    }
    wasZero = false;
  }
  lastScroll = document.scrollingElement.scrollTop;
});


more.addEventListener("click", (e) => {
  document.scrollingElement.scrollTop = 1
});

(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 500);
}("Stanley "));
