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


// Get URL arguments
function getParameterByName(name, url) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return "";
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}


// Lazy load images, https://davidwalsh.name/lazyload-image-fade
[].forEach.call(document.querySelectorAll('noscript'), function (noscript) {
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
   window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').then(function (registration) {
         console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
         console.log('ServiceWorker registration failed: ', err);
      });
   });
}

// PAGINATION

// https://stackoverflow.com/questions/5999118/add-or-update-query-string-parameter
function updateQueryStringParameter(uri, key, value) {
   var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
   var separator = uri.indexOf("?") !== -1 ? "&" : "?";
   if (uri.match(re)) {
      return uri.replace(re, "$1" + key + "=" + value + "$2");
   }
   else {
      return uri + separator + key + "=" + value;
   }
}


function makePageLink(currentUrl, currentStart, start, linkText) {
   var uri = updateQueryStringParameter(currentUrl, "start", start);
   var tagStart = '<a href="';
   if (currentStart == start) {
      uri = "#";
      if (linkText.toString().substring(0, 1) !== "&") {  // Don't modify arrows
         tagStart = '<a class="active" href="';
      }
   }
   var link = tagStart + uri + '">' + linkText + '</a>';
   return link;
}


// Creates links to additional pages of search results.
// Requires a start URI argument indicating start index of search results
// as passed to the server providing the search results.
function showPageLinks(total, limit, showPages, currentStart, domElementId) {
   if (total <= limit) {
      return "";
   }

   var el = document.getElementById(domElementId);
   if (!el) return;

   var currentUrl = window.location.href;
   var numPages = Math.ceil(total / limit);
   var currentPage = Math.floor(currentStart / limit) + 1;
   var pagesLeftRight = Math.floor(showPages / 2);
   var startPage = currentPage - pagesLeftRight;
   var endPage = currentPage + pagesLeftRight;

   if (endPage > numPages) {
      endPage = numPages;
      startPage = endPage - showPages + 1;
   }
   if (startPage <= 0) {
      startPage = 1;
      endPage = showPages;
      if (endPage > numPages) {
         endPage = numPages;
      }
   }

   var link_list = [];
   link_list.push(makePageLink(currentUrl, currentStart, 0, "&laquo;"));
   for (var i = startPage; i <= endPage; i++) {
      var startIndex = (i - 1) * limit;
      link_list.push(makePageLink(currentUrl, currentStart, startIndex, i));
   }
   var lastIndex = (numPages - 1) * limit;
   link_list.push(
      makePageLink(currentUrl, currentStart, lastIndex, "&raquo;"));

   el.innerHTML = link_list.join("");
}


function escapeHtml(unsafe) {
   return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}


function showResultCount(query, total, limitPerPage, currentStartIndex, domElementId) {
   var element = document.getElementById(domElementId);
   if (total == 0 || !element) {
      return;
   }

   var s = "";
   if (total > 1) {
      s = "s";
   }
   var found = "<p>Found " + total + " result" + s;
   if (query != "" && query != null) {
      query = escapeHtml(query);
      var forQuery = ' for <span class="result-query">' + query + '</span>';
   }
   else {
      var forQuery = "";
   }
   if (limitPerPage === null || total <= limitPerPage) {
      var showing = "</p>";
   }
   else {
      var fromCount = currentStartIndex + 1;
      var toCount = currentStartIndex + limitPerPage;
      if (toCount > total) {
         toCount = total;
      }
      var showing = (". Showing results " + fromCount + " to " + toCount + ".</p>");
   }
   element.innerHTML = found + forQuery + showing;
}

// CORS

// adapted from https://www.html5rocks.com/en/tutorials/cors/
// Create the XHR object.
function createCORSRequest(method, url) {
   var xhr = new XMLHttpRequest();
   if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
   } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
   } else {
      // CORS not supported.
      xhr = null;
   }
   return xhr;
}


// Make the actual CORS request.
function makeCorsRequest(url, successCallback, errorCallback) {
   var xhr = createCORSRequest("GET", url);
   if (!xhr) {
      alert("CORS not supported");
      return;
   }

   // Response handlers.
   xhr.onload = function () {
      var headers = xhr.getAllResponseHeaders().split("\n");
      var header_dict = {};
      for (var i = 0; i < headers.length; i++) {
         var parts = headers[i].split(": ");
         header_dict[parts[0].toLowerCase()] = parts[1];
      }

      successCallback(header_dict, xhr.responseText);
   };

   xhr.onerror = function () {
      errorCallback();
   };

   xhr.send();
}
