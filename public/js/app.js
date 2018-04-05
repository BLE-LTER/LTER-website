function launchSiteSearch() {
  var q = $("#siteSearchInput")[0].value.trim();
  if (q.length != 0) {
    window.location.href = "search.html?q=" + q;
    // Prevent form submit from reloading page and short-circuiting window.location
    return false;
  }
}

function siteSearchKeypress(e) {
  if (e.keyCode == 13) {
    launchSiteSearch();
  }
}

// Lazy load images, https://davidwalsh.name/lazyload-image-fade
[].forEach.call(document.querySelectorAll('noscript'), function(noscript) {
  if (noscript.getAttribute('data-src')) {
    var img = new Image();
    noscript.parentNode.insertBefore(img, noscript);
    img.src = noscript.getAttribute('data-src');
    img.className = noscript.getAttribute('img-class');
    img.alt = noscript.getAttribute('alt');
  }
});

// Install service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
