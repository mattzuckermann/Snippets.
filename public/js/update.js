// Get references to page elements
var $snippetTitle = $("#snippet-title");
var $snippetCode = $("#snippet-code");
var $snippetComment = $("#snippet-comment");
var $snippetCategory = $("#snippet-category");

var $confirmBtn = $("#confirm");

jQuery.fn.prettify = function() {
  this.html(prettyPrintOne(this.html()));
};

var API = {
  getSnippets: function() {
    return $.ajax({
      url: "api/snippets",
      type: "GET"
    });
  },
  updateSnippet: function(idToUpdate, snippet) {
    return $.ajax({
      url: "/api/update/" + idToUpdate,
      type: "PUT",
      data: snippet
    });
  }
};

//Post onsubmit actions for update page
var refreshUpdate = function() {
  API.getSnippets();
};

var handleConfirmButtonClick = function(event) {
  event.preventDefault();

  var pathArray = window.location.pathname.split("/");
  var idToUpdate = pathArray.slice(3, 4).toString();

  var snippet = {
    title: $snippetTitle.val().trim(),
    code: $snippetCode.val().trim(),
    comment: $snippetComment.val().trim(),
    category: $snippetCategory.val().trim()
  };

  if (!(snippet.title && snippet.code && snippet.comment && snippet.category)) {
    alert("You must input something into all fields!");
    return;
  }

  API.updateSnippet(idToUpdate, snippet).then(function() {
    refreshUpdate();
  });

  alert("Snippet Updated!");
  window.location.replace("/home");
};

$confirmBtn.on("click", handleConfirmButtonClick);
