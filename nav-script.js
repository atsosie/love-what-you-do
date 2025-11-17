const body = document.querySelector("body");
const buttons = document.querySelectorAll(".menu-button");
const open = document.querySelector(".open-button");

function toggleMenu() {
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const isActive = body.classList.toggle("menu-active");
			if (isActive) {
				open.setAttribute("aria-expanded", "true");
			} else {
				open.setAttribute("aria-expanded", "false");
			}
		});
	});
}

function escapeMenu() {
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && body.classList.contains("menu-active")) {
			body.classList.remove("menu-active");
			open.setAttribute("aria-expanded", "false");
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	toggleMenu();
	escapeMenu();
});
