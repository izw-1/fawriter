// when window.scroll = offsetTop of section remove class hidden from section
let hiddens = Array.from(document.querySelectorAll(".hidden:not(.container.hidden)"));
let landing = document.querySelector(".landing .container.hidden");

window.addEventListener("scroll", () => {
    hiddens.forEach(hidden => {
        if (window.scrollY >= hidden.offsetTop - 400) {
            hidden.classList.remove("hidden");
        };
    });
});

// when title animation start hide landing title when animation ends show landing title

let landingContainer = document.querySelector(".landing .container");
let title = document.querySelector(".landing .title");

title.onanimationstart = () => {
    document.body.style.overflow = "hidden";
};

title.onanimationend = () => {
    landingContainer.classList.remove("hidden");
    document.body.style.overflow = "auto";
};
