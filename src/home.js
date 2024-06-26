const homeContent = document.createElement("div");
homeContent.setAttribute("id", "hero");

const title = document.createElement("h1");
title.textContent = "La Cuisine";

const info = document.createElement("div");
const infoParagraph = document.createElement("p");
info.setAttribute("id", "info");
infoParagraph.textContent = "Committed to providing the best Italian food in the nation since 2024";
info.appendChild(infoParagraph);

homeContent.appendChild(title);
homeContent.appendChild(info);

export default homeContent;