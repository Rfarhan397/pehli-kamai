let branding = document.querySelector("#branding");
let signage = document.querySelector("#signage");
let printing = document.querySelector("#printing");
let exhibition = document.querySelector("#exhibition");
let interiors = document.querySelector("#interiors");
let type = document.querySelector("#type");
let signagetext = document.querySelector("#signagetext");
let signagelogo = document.querySelector("#signagelogo");
let brandingtext = document.querySelector("#brandingtext");
let brandinglogo = document.querySelector("#brandinglogo");
let printingtext = document.querySelector("#printingtext");
let printinglogo = document.querySelector("#printinglogo");
let exhibitiontext = document.querySelector("#exhibitiontext");
let exhibitionlogo = document.querySelector("#exhibitionlogo");
let interiorstext = document.querySelector("#interiorstext");
let interiorslogo = document.querySelector("#interiorslogo");
let branddata = document.querySelector(".branddata");
let signagedata = document.querySelector(".signagedata");
let printingdata = document.querySelector(".printingdata");
let exhibitiondata = document.querySelector(".exhibitiondata");
let interiorsdata = document.querySelector(".interiorsdata");

branding.addEventListener("click", () => {
  console.log("branding");
  brandinglogo.style.color = "white";
  brandingtext.style.color = "white";
  branding.classList.add("activeBlock");

  signage.classList.remove("activeBlock");
  printing.classList.remove("activeBlock");
  printing.classList.add("greyBlock");
  exhibition.classList.remove("activeBlock");
  interiors.classList.remove("activeBlock");
  interiors.classList.add("greyBlock");
  signagetext.style.color = "black";
  printingtext.style.color = "black";
  exhibitiontext.style.color = "black";
  interiorstext.style.color = "black";
  signagelogo.style.color = "rgba(1, 108, 160, 1)";
  printinglogo.style.color = "rgba(1, 108, 160, 1)";
  exhibitionlogo.style.color = "rgba(1, 108, 160, 1)";
  interiorslogo.style.color = "rgba(1, 108, 160, 1)";
});
signage.addEventListener("click", () => {
  console.log("signage");
  signagelogo.style.color = "white";
  signagetext.style.color = "white";
  signage.classList.add("activeBlock");

  branding.classList.remove("activeBlock");
  branding.classList.add("greyBlock");
  printing.classList.remove("activeBlock");
  printing.classList.add("greyBlock");
  exhibition.classList.remove("activeBlock");
  interiors.classList.remove("activeBlock");
  interiors.classList.add("greyBlock");
  brandingtext.style.color = "black";
  printingtext.style.color = "black";
  exhibitiontext.style.color = "black";
  interiorstext.style.color = "black";
  brandinglogo.style.color = "rgba(1, 108, 160, 1)";
  printinglogo.style.color = "rgba(1, 108, 160, 1)";
  exhibitionlogo.style.color = "rgba(1, 108, 160, 1)";
  interiorslogo.style.color = "rgba(1, 108, 160, 1)";
});
printing.addEventListener("click", () => {
  console.log("printing");
  printinglogo.style.color = "white";
  printingtext.style.color = "white";
  printing.classList.add("activeBlock");

  branding.classList.remove("activeBlock");
  branding.classList.add("greyBlock");
  signage.classList.remove("activeBlock");
  exhibition.classList.remove("activeBlock");
  interiors.classList.remove("activeBlock");
  interiors.classList.add("greyBlock");
  brandingtext.style.color = "black";
  signagetext.style.color = "black";
  exhibitiontext.style.color = "black";
  interiorstext.style.color = "black";
  brandinglogo.style.color = "rgba(1, 108, 160, 1)";
  signagelogo.style.color = "rgba(1, 108, 160, 1)";
  exhibitionlogo.style.color = "rgba(1, 108, 160, 1)";
  interiorslogo.style.color = "rgba(1, 108, 160, 1)";
});
exhibition.addEventListener("click", () => {
  console.log("exhibition");
  exhibitionlogo.style.color = "white";
  exhibitiontext.style.color = "white";
  exhibition.classList.add("activeBlock");

  branding.classList.remove("activeBlock");
  branding.classList.add("greyBlock");
  printing.classList.remove("activeBlock");
  printing.classList.add("greyBlock");
  signage.classList.remove("activeBlock");
  interiors.classList.remove("activeBlock");
  interiors.classList.add("greyBlock");
  brandingtext.style.color = "black";
  printingtext.style.color = "black";
  signagetext.style.color = "black";
  interiorstext.style.color = "black";
  brandinglogo.style.color = "rgba(1, 108, 160, 1)";
  printinglogo.style.color = "rgba(1, 108, 160, 1)";
  signagelogo.style.color = "rgba(1, 108, 160, 1)";
  interiorslogo.style.color = "rgba(1, 108, 160, 1)";
});
interiors.addEventListener("click", () => {
  console.log("interiors");
  interiorslogo.style.color = "white";
  interiorstext.style.color = "white";
  interiors.classList.add("activeBlock");

  branding.classList.remove("activeBlock");
  branding.classList.add("greyBlock");
  printing.classList.remove("activeBlock");
  printing.classList.add("greyBlock");
  exhibition.classList.remove("activeBlock");
  signage.classList.remove("activeBlock");
  brandingtext.style.color = "black";
  printingtext.style.color = "black";
  exhibitiontext.style.color = "black";
  signagetext.style.color = "black";
  brandinglogo.style.color = "rgba(1, 108, 160, 1)";
  printinglogo.style.color = "rgba(1, 108, 160, 1)";
  exhibitionlogo.style.color = "rgba(1, 108, 160, 1)";
  signagelogo.style.color = "rgba(1, 108, 160, 1)";
});

const checks = document.querySelectorAll(".types");
checks.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("typeBlock");
  })
);

branding.addEventListener("click", function () {
  branddata.style.display = "grid";
  signagedata.style.display = "none";
  printingdata.style.display = "none";
  exhibitiondata.style.display = "none";
  interiorsdata.style.display = "none";
});

signage.addEventListener("click", function () {
  branddata.style.display = "none";
  signagedata.style.display = "grid";
  printingdata.style.display = "none";
  exhibitiondata.style.display = "none";
  interiorsdata.style.display = "none";
});

printing.addEventListener("click", function () {
  branddata.style.display = "none";
  signagedata.style.display = "none";
  printingdata.style.display = "grid";
  exhibitiondata.style.display = "none";
  interiorsdata.style.display = "none";
});
exhibition.addEventListener("click", function () {
  branddata.style.display = "none";
  signagedata.style.display = "none";
  printingdata.style.display = "none";
  exhibitiondata.style.display = "grid";
  interiorsdata.style.display = "none";
});
interiors.addEventListener("click", function () {
  branddata.style.display = "none";
  signagedata.style.display = "none";
  printingdata.style.display = "none";
  exhibitiondata.style.display = "none";
  interiorsdata.style.display = "grid";
});
