function toggleNav(status, scope) {
  document.documentElement.classList.toggle("has-open-menu");

  if (status == "open") {
    scope.addEventListener("transitionend", () => {
      scope.querySelector(".js-close").focus();
    });
  }
  if (status == "close") {
    scope.querySelector(".js-open").focus();
  }
}

/* ----------
 * Open & close menu on buttons click
 */
const menu = document.querySelector(".menu");

menu.addEventListener(
  "click",
  (event) => {
    const openButton = menu.querySelector(".js-open");
    const closeButton = menu.querySelector(".js-close");

    if (event.target == openButton) {
      toggleNav("open", menu);
    } else if (
      event.target == closeButton ||
      !event.target.closest(".menu_list")
    ) {
      toggleNav("close", menu);
    }
  },
  true
);

/* ----------
 * Close menu if focus is out of it
 */
menu.addEventListener(
  "blur",
  (event) => {
    // Check if the target link is an indirect child of .menu_list
    const targetIsIn = event.relatedTarget.closest(".menu_list");

    if (
      document.documentElement.classList.contains("has-open-menu") &&
      !targetIsIn
    ) {
      document.documentElement.classList.remove("has-open-menu");
    }
  },
  true
);

/* ----------
 * Close menu if Esc is pressed
 */
document.addEventListener("keydown", (event) => {
  const escapeKey = 27;

  if (event.keyCode === escapeKey && document.documentElement.classList.contains("has-open-menu")) {
    document.documentElement.classList.remove("has-open-menu");
  }
});
