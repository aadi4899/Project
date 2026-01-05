
  const hamburger = document.getElementById("gcHamburger");
  const nav = document.querySelector(".gc-home-nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.style.overflow =
      nav.classList.contains("active") ? "hidden" : "auto";
  });

  document.querySelectorAll(".gc-home-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
