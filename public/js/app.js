$(document).foundation()

function launchSiteSearch() {
  var q = $("#siteSearchInput")[0].value.trim();
  if (q.length != 0) {
    window.location.href = "search.html?q=" + q;
 }
}

function siteSearchKeypress(e) {
  if (e.keyCode == 13) {
    launchSiteSearch();
  }
}