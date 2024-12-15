document.title = "Dastan Temirgaliyev";
const headerElement = document.getElementById("header");
const h1Element = headerElement.querySelector("h1");
h1Element.textContent = "Изучение JavaScript";
const menuLinks = document.querySelectorAll(".menu-link");
for (const link of menuLinks) {
    console.log(link.textContent);
  }
const featureslist = document.querySelectorAll(".features-list li")
featureslist[1].innerHTML = "Поддержка <b>API</b>";

