const root = document.documentElement;
root.dataset.enhanced = "true";

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const links = document.querySelector<HTMLElement>("[data-primary-links]");

if (toggle && links) {
  links.id = "primary-links";

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", document.documentElement.lang === "ru" ? "Открыть меню" : "Open menu");
    links.hidden = window.matchMedia("(max-width: 64rem)").matches;
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", document.documentElement.lang === "ru" ? "Закрыть меню" : "Close menu");
    links.hidden = false;
  };

  toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  const viewport = window.matchMedia("(max-width: 64rem)");
  viewport.addEventListener("change", closeMenu);
  closeMenu();
}
