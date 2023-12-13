document.querySelector(".low-to-high").addEventListener("click", function() {
    let sections = document.querySelector(".sofa-sections  ul");
    let sortedSections = Array.from(sections.children).sort((a, b) => {
        let aPrice = parseInt(a.getAttribute("price"));
        let bPrice = parseInt(b.getAttribute("price"));
        return aPrice - bPrice;
    });
    while (sections.children.length > 0) {
        sections.removeChild(sections.firstChild);
    }
    sortedSections.forEach(section => {
        sections.appendChild(section);
    });
});

document.querySelector(".high-to-low").addEventListener("click", function() {
    let sections = document.querySelector(".sofa-sections ul");
    let sortedSections = Array.from(sections.children).sort((a, b) => {
        let aPrice = parseInt(a.getAttribute("price"));
        let bPrice = parseInt(b.getAttribute("price"));
        return bPrice - aPrice;
    });
    while (sections.children.length > 0) {
        sections.removeChild(sections.firstChild);
    }
    sortedSections.forEach(section => {
        sections.appendChild(section);
    });
});