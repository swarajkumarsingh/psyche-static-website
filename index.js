document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.remove("dark");
}
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

const phoneIcons = document.getElementsByClassName("feather-phone");

for (let i = 0; i < phoneIcons.length; i++) {
  phoneIcons[i].addEventListener("click", function () {
    console.log("clicked");
    const phoneNumber = "+919341216202";
    window.location.href = `tel:${phoneNumber}`;
  });
}


if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("nav").classList.add("bg-gray-800");
} else {
  document.querySelector("nav").classList.add("bg-white");
}
