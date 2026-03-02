const h1 = document.querySelector("header h1");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    h1.classList.add("hidden");
  } else {
    h1.classList.remove("hidden");
  }
});
