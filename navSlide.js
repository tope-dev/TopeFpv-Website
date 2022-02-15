const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //When the Burger is pressed -> toggle the navigation bar
  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    console.log("debug-1");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });

  //When the navigation is selected -> toggle the navigation bar (close)
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      console.log("debug-2");

      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 5 + 0.5
          }s`;
        }
      });
    });
  }
};

navSlide();