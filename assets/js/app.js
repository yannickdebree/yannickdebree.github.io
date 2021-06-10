const sections = ["about", "skills", "experiences", "education", "interests"];

/**
 * Ckeck if DOM element is in the viewport.
 * @param {Element} element
 * @returns {Boolean}
 */
function isElementInTheViewport(element) {
  const rect = element.getBoundingClientRect();

  console.log(rect);

  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function updateActiveSection() {
  const a = document.querySelector("#about");

  console.log(isElementInTheViewport(a));
}

function main() {
  window.addEventListener("load", updateActiveSection);
  window.addEventListener("scroll", updateActiveSection);
}

main();
