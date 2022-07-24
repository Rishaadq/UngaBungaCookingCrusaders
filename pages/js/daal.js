

const anchor = document.getElementById("scroll-to-top");

function scrollToTop() {
    console.log("Smooth scrolling!");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

anchor.addEventListener("click", function(e) {
    e.preventDefault;
    scrollToTop();
})