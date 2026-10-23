document.querySelectorAll(".detail-button").forEach((button) => {
  button.addEventListener("click", () => {
    const details = document.getElementById(button.getAttribute("aria-controls"));
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    details.hidden = isExpanded;
    button.querySelector("span").textContent = isExpanded ? "Lihat biodata" : "Tutup biodata";
  });
});

document.getElementById("current-year").textContent = new Date().getFullYear();