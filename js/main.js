const h1 = document.querySelector("header h1");
const headerHiddenClass = "hidden";
const scrollThreshold = 50;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    h1.classList.add(headerHiddenClass);
  } else {
    h1.classList.remove(headerHiddenClass);
  }
});
