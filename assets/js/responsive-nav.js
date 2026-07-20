document.addEventListener("DOMContentLoaded", () => {
  const masthead = document.querySelector(".masthead");
  if (!masthead) return;

  const headerInner = masthead.querySelector(".container > div");
  const nav = masthead.querySelector("nav");
  if (!headerInner || !nav || headerInner.querySelector(".nav-toggle")) return;

  const toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Toggle navigation");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";

  const logo = headerInner.querySelector(".logo-block");
  if (logo && logo.nextSibling) {
    headerInner.insertBefore(toggle, logo.nextSibling);
  } else {
    headerInner.prepend(toggle);
  }

  const setHeaderOffset = () => {
    document.documentElement.style.setProperty(
      "--masthead-offset",
      `${masthead.offsetHeight}px`
    );
  };

  toggle.addEventListener("click", () => {
    const isOpen = masthead.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    setHeaderOffset();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      masthead.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      setHeaderOffset();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      masthead.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    setHeaderOffset();
  });

  setHeaderOffset();
});
