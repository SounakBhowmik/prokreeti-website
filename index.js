// Add a solid background to the navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-solid");
    } else {
      navbar.classList.remove("navbar-solid");
    }
  });

// Make the navbar sticky on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });