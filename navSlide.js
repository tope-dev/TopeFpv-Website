const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const navLinksLi = document.querySelectorAll(".nav-links li");
  const logo = document.querySelector(".logo");
  var windowWidth = document.documentElement.clientWidth;

  //When the Burger is pressed -> toggle the navigation bar
  burger.addEventListener("click", () => {
    //Toggle Nav
    navLinks.classList.toggle("nav-active");
    console.log("debug-1");

    //Animate Links
    navLinksLi.forEach((link, index) => {
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
  
  for (let i = 0; i < navLinksLi.length; i++) {
    navLinksLi[i].addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      console.log("debug-2");

      //Animate Links
      navLinksLi.forEach((link, index) => {
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
  }

  window.addEventListener("scroll", ()=>{
    var nav = document.querySelector("nav");
    navLinks.classList.toggle("sticky", window.scrollY > 50);
    nav.classList.toggle("sticky", window.scrollY > 50);
    logo.classList.toggle("sticky", window.scrollY > 50);

  });
};

navSlide();
