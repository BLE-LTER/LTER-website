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