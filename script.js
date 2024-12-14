// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Placeholder for form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent! Thank you!");
});
