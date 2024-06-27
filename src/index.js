import "./styles.css";
import homeContent from "./home";
import menuContent from "./menu";
import aboutContent from "./about";

function clearCurrentPage() {
  main.removeChild(main.firstChild);
}

// Match indices between buttons and corresponding pages
const navButtons = document.querySelectorAll(".nav-btn");
const navPages = [homeContent, menuContent, aboutContent];

const main = document.querySelector("#content");
navButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    clearCurrentPage();
    main.appendChild(navPages[i]);
  });
});
main.appendChild(homeContent);
