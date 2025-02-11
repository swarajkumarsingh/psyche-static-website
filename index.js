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


  document.addEventListener("DOMContentLoaded", async function () {
    const apiUrl = "https://api.jsonbin.io/v3/b/67ab61c5e41b4d34e489d10e"; // JSONBin API URL
    const container = document.getElementById("product-container");

    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      const products = jsonData.record; // Accessing data inside 'record' property

      products.forEach((product) => {
        const card = `
                        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div class="h-56 w-full">
                                <a href="#">
                                    <img class="mx-auto h-full" src="${product.image_url}" alt="${product.title}" />
                                </a>
                            </div>

                            <div class="pt-6">
                                <div class="mb-4 flex items-center justify-between gap-4">
                                    <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                                        ${product.offer}
                                    </span>

                                    <div class="flex items-center justify-end gap-1">
                  <button
                    type="button"
                    data-tooltip-target="tooltip-quick-look"
                    class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only"> Bag </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </button>
                  <div
                    id="tooltip-quick-look"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    data-popper-placement="top"
                  >
                    Bag
                    <div class="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button
                    type="button"
                    data-tooltip-target="tooltip-add-to-favorites"
                    class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only"> Book </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather-phone"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="tooltip-add-to-favorites"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    data-popper-placement="top"
                  >
                    Book
                    <div class="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
                                </div>

                                <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                    ${product.title}
                                </a>

                                <p class="mt-2 text-sm font-medium text-gray-500">Artist: ${product.artist}</p>
                                <p class="mt-2 text-sm font-medium text-gray-500">Phone: ${product.phone}</p>

                                <div class="mt-4 flex items-center justify-between gap-4">
                                    <p class="text-2xl font-extrabold leading-tight text-gray-900">
                                        ₹${product.price}
                                    </p>

                                    <button type="button" class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
        container.innerHTML += card;
      });

      const phoneIcons = document.getElementsByClassName("feather-phone");

      for (let i = 0; i < phoneIcons.length; i++) {
        phoneIcons[i].addEventListener("click", function () {
          console.log("clicked");
          const phoneNumber = "+919341216202";
          window.location.href = `tel:${phoneNumber}`;
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      container.innerHTML =
        "<p class='text-red-500'>Failed to load products.</p>";
    }
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
