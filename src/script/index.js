function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  var dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(function(dropdown) {
      if (dropdown.id !== dropdownId) {
          dropdown.classList.remove('show');
      }
  });
  var currentDropdown = document.getElementById(dropdownId);
  if (currentDropdown) {
      currentDropdown.classList.toggle("show");
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about .section__header", scrollRevealOption);
ScrollReveal().reveal(".about .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about button", {
  ...scrollRevealOption,
  delay: 1500,
});

function showSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
}

function offSidebar() {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
}

$(document).ready(function () {
  $(".sub-btn").click(function () {
      $(this).next(".sub-menu").slideToggle();
      $(this).find(".dropdown").toggleClass("rotate");
  });
});
