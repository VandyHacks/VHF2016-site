const NUM_PAGES = 3;
const ANIMATION_TIME = 700;
let currentPage = 0;

// From underscore.js
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

const scroll = {
  init() {
    currentPage = 0;
    $(() => {
      // 'html' only works on firefox.
      let scrollLeft = $('body').scrollLeft() || $('html').scrollLeft();

      // Ensure we recognize the starting page. It's not always 0! (browser caches the scroll position)
      currentPage = Math.round(scrollLeft / $(window).width())

      // Bind the mouse events to scroll the pages
      $('html, body').on(
        'scroll touchmove mousewheel',
        throttle(scroll.onScroll, ANIMATION_TIME * 2, {trailing: false})
      );

      // Bind the mouse events to scroll the pages
      $(window).resize(
        scroll.scroll
      );
    });
  },

  onScroll(e) {
    const oldPage = currentPage;

    if (e.deltaY > 0 || e.deltaX < 0) { // page left
      currentPage = Math.max(currentPage - 1, 0);
    } else if (e.deltaY < 0 || e.deltaX > 0) { // page right
      currentPage = Math.min(currentPage + 1, NUM_PAGES - 1);
    }

    // exit early if on an edge of the window
    if (oldPage === currentPage) {
      return;
    }

    scroll.scroll();

    e.preventDefault();
    return false;
  },

  scroll(instant) {
    const TIME = instant ? 0 : ANIMATION_TIME;

    $('html, body').animate({
      scrollLeft: currentPage * $(window).width(),
    }, TIME, 'linear');
  },

  scrollLeft() {
    if (currentPage === 0) {
      return;
    }
    currentPage--;
    scroll.scroll();
  },

  scrollRight() {
    if (currentPage === NUM_PAGES - 1) {
      return;
    }
    currentPage++;
    scroll.scroll();
  }
};

export default scroll;
