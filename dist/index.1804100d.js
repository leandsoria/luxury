const ham = document.querySelector(".ham-icon");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list__item");
const allSections = document.querySelectorAll("section");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entries);
    if (!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.3
});
allSections.forEach(function(section) {
    sectionObserver.observe(section);
});
ham.addEventListener("click", function() {
    ham.classList.toggle("active");
    logo.classList.toggle("translate");
    list.classList.toggle("show-nav");
});

//# sourceMappingURL=index.1804100d.js.map
