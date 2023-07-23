const buttons = document.querySelectorAll(".btn-open");
const ticketModal = document.querySelector(".ticketModal");
const modalcontent = document.querySelector(".content");
const btnClose = document.querySelector(".close");
ticketModal.classList.remove("open");
function Modal() {
  ticketModal.classList.add("open");
}
function hideModal() {
  ticketModal.classList.remove("open");
}
for (const button of buttons) {
  button.addEventListener("click", Modal);
}
btnClose.addEventListener("click", hideModal);
ticketModal.addEventListener("click", hideModal);
modalcontent.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
});

// responsive
var header = document.getElementById("header");
var mobile = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
mobile.onclick = function () {
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Auto close when choose menu
var menuItems = document.querySelectorAll('.navbar li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// settings owl-carousel
var carousel = document.getElementById("#hero-carousel");
$(document).ready(function () {
  $("#hero-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    //navText: navText,
    autoplay: true,
    autoplayHoverPause: true,
  });
});
