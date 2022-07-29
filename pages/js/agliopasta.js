window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchor_intro = document.getElementById('anchor-intro');
    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 125);

    anchor_intro.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;

        transition_el.classList.add('is-active');
        setTimeout(() => {
            window.location.href = target;
        }, 125);
    })
}

const anchor = document.getElementById("scroll-to-top");

function scrollToTop() {
    console.log("Smooth scrolling!");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

anchor.addEventListener("click", function(e) {
    e.preventDefault;
    scrollToTop();
})

