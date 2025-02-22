const DEFAULT_CUSTOMER_CARE_NUMBER = 9341213202;

document.documentElement.classList.remove("dark");
localStorage.setItem("theme", "light");
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.remove("dark");
}

window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

window.scrollBy({
  top: 100,
  left: 0,
  behavior: "smooth",
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu a");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("scale-y-0");
    mobileMenu.classList.remove("scale-y-100");
  });
});

const JSON_URL_DEV = "https://jsonkeeper.com/b/11UU";
const JSON_URL_PROD = "https://api.jsonbin.io/v3/b/67ab813ce41b4d34e489e8b4";

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("product-container");

  try {
    const response = await fetch(JSON_URL_PROD);
    const jsonData = await response.json();
    const products = jsonData.record;

    if (!products || products.length === 0) {
      document.getElementById("loading").innerText = "Failed to load products.";
      return;
    }

    products.forEach((product) => {
      const rating = Math.round(product.rating || 0); // Ensure rating is an integer
      const maxStars = 5;
      let starsHtml = "";

      for (let i = 1; i <= maxStars; i++) {
        starsHtml += `<svg class="h-4 w-4 ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"/>
                      </svg>`;
      }

      const card = `
        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div class="h-56 w-full">
            <a href="#">
              <img class="mx-auto h-full" src="${product.image_url}" alt="${
        product.title
      }" />
            </a>
          </div>

          <div class="pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
              <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                  ${starsHtml}
                </div>
                <p class="text-sm font-medium text-gray-900">${product.rating.toFixed(
                  1
                )}</p>
              </div>
            </div>

            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline">
              ${product.title}
            </a>

            <p class="mt-2 text-sm font-medium text-gray-500">Artist: ${
              product.artist
            }</p>
            <a href="mailto:${product.contact}">
              <p class="mt-2 text-sm font-medium text-gray-500">Contact: ${
                product.contact
              }</p>
            </a>

            <div class="mt-4 flex items-center justify-between gap-4">
              <p class="text-lg font-medium text-gray-500 line-through">₹${(
                Number(product.price) + 500
              ).toLocaleString()}</p>
              <p class="text-2xl font-extrabold leading-tight text-gray-900">₹${Number(
                product.price
              ).toLocaleString()}</p>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += card;
    });

    document.getElementById("loading").style.display = "none";
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("loading").innerText = "Failed to load products.";
  }
});


if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.querySelector("nav").classList.add("bg-gray-800");
} else {
  document.querySelector("nav").classList.add("bg-white");
}
