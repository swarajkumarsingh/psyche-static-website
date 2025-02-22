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

document.getElementById("go-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

const JSON_URL_DEV = "https://jsonkeeper.com/b/11UU";
const JSON_URL_PROD = "https://api.jsonbin.io/v3/b/67ab8181e41b4d34e489e8ee";

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("product-container");

  try {
    const response = await fetch(JSON_URL_PROD);
    const jsonData = await response.json();
    const products = jsonData.record;

    if (!products || products.length === 0) {
      document.getElementById("loading").innerText = "Failed to load products.";
    }

    products.forEach((product) => {
      const rating = Math.round(product.rating || 0);
      let stars = "";
      for (let i = 1; i <= 5; i++) {
        stars += `<svg class="h-4 w-4 ${
          i <= rating ? "text-yellow-400" : "text-gray-300"
        }" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
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
                <div class="flex items-center">${stars}</div>
                  <p class="text-sm font-medium text-gray-900">${
                    product.rating ? product.rating.toFixed(1) : "N/A"
                  }</p>
                </div>
              <div class="flex items-center justify-end gap-1">
                <a href="mailto:${product.contact}" class="relative group">
                  <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span class="sr-only">Mail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#5f6368">
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                    </svg>
                  </button>
                </a>
                <a href="tel:${DEFAULT_CUSTOMER_CARE_NUMBER}" class="relative group">
                  <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span class="sr-only">Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#5f6368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline">${
              product.title
            }</a>
            <a href="${product.artist_link}">
            <p class="mt-2 text-sm font-medium text-gray-500">Artist: ${
              product.artist
            }</p>
            </a>
            <p class="mt-2 text-sm font-medium text-gray-500">Contact: ${
              product.contact
            }</p>
            <div class="mt-4 flex items-center justify-between gap-4">
              <p class="text-lg font-medium text-gray-500 line-through">₹${Number(
                product.max_price
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
