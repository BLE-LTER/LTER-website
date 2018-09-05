"use strict";

var LUNR_CONFIG = {
    "resultsElementId": "searchResults",  // Element to contain results
    "countElementId": "resultCount"  // Element showing number of results
};


// Parse search results into HTML
function parseLunrResults(results) {
    var html = [];
    for (var i = 0; i < results.length; i++) {
        var id = results[i]["ref"];
        var item = PREVIEW_LOOKUP[id]
        var title = item["t"];
        var preview = item["p"];
        var link = item["l"];
        var result = ('<p><span class="result-title"><a href="' + link + '">'
                    + title + '</a></span><br><span class="result-preview">'
                    + preview + '</span></p>');
        html.push(result);
    }
    if (html.length) {
        return html.join("");
    }
    else {
        return "<p>Your search returned no results.</p>";
    }
}


function searchLunr(query) {
    var idx = lunr.Index.load(LUNR_DATA);
    // Write results to page
    var results = idx.search(query);
    var resultHtml = parseLunrResults(results);
    var elementId = LUNR_CONFIG["resultsElementId"];
    document.getElementById(elementId).innerHTML = resultHtml;

    var count = results.length;
    showResultCount(query, count, null, null, LUNR_CONFIG["countElementId"]);
}


// When the window loads, read query parameters and perform search
window.onload = function() {
    var query = getParameterByName("q");
    if (query != "" && query != null) {
        document.forms.lunrSearchForm.q.value = query;
        searchLunr(query);
    }
};