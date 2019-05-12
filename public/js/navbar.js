$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    if (data.email) {
      $("#logout").show();
      $("#username").text(`Welcome ${data.email}`);
    }
  });
});

$("#logout").on("click", async function() {
  await $.get("/logout");
  await localStorage.removeItem("username");
  window.location.reload("/");
});

window.onscroll = function() {
  navScroll();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navScroll() {
  if (window.pageYOffset > 0.0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
