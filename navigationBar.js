const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="css/nav.css">

<nav>
<div class="logo">
    <a href="index.html"><img src="img/logo/color_logo_noslogan.png" alt=""></a>
    
</div>
<ul class="nav-links">
    <li>
        <a class="nav-links-a" href="/index.html#home">HOME</a>
    </li>
    <li>
        <a class="nav-links-a" href="/index.html#projects">PROJECTS</a>
    </li>
    <li>
        <a class="nav-links-a" href="/index.html#services">SERVICES</a>
    </li>
    <li>
        <a class="nav-links-a" href="/index.html#team">TEAM</a>
    </li>
    <li>
        <a class="nav-links-a" href="shop.html">SHOP</a>
    </li>
    <li>
        <a class="nav-links-contact" href="/index.html#contact">CONTACT</a>
    </li>
</ul>
<div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
</div>
</nav>

`;

class NavigationBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  // const burger = this.shadowRoot.querySelector(".burger");
  // const navLinks = this.shadowRoot.querySelector(".nav-links");
  // const navLinksLi = this.shadowRoot.querySelectorAll(".nav-links li");
  // const logo = this.shadowRoot.querySelector(".logo");
  // var windowWidth = this.shadowRoot.documentElement.clientWidth;

  connectedCallback() {
    this.navSticky();
    this.navSlide();
  }

  
  navSticky = () => {
    window.addEventListener("scroll", () => {
      const navLinks = this.shadowRoot.querySelector(".nav-links");
      var nav = this.shadowRoot.querySelector("nav");
      const logo = this.shadowRoot.querySelector(".logo");
      navLinks.classList.toggle("sticky", window.scrollY > 50);
      nav.classList.toggle("sticky", window.scrollY > 50);
      logo.classList.toggle("sticky", window.scrollY > 50);
    });
  };

  navSlide = () => {

    const burger = this.shadowRoot.querySelector(".burger");
    const navLinks = this.shadowRoot.querySelector(".nav-links");
    const navLinksLi = this.shadowRoot.querySelectorAll(".nav-links li");
    const logo = this.shadowRoot.querySelector(".logo");
    // var windowWidth = this.shadowRoot.documentElement.clientWidth;


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
  };
}

window.customElements.define("navigation-bar", NavigationBar);
