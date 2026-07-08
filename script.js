const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));


function animateHeroText() {
    // remove animation from all slides
    document.querySelectorAll('.hero-text').forEach(el => {
        el.classList.remove('show');
    });

    // get active slide text
    const activeText = document.querySelector('.carousel-item.active .hero-text');

    if (activeText) {
        setTimeout(() => {
            activeText.classList.add('show');
        }, 150);
    }
}

// run on page load
document.addEventListener("DOMContentLoaded", animateHeroText);

// run every time slide changes
const carousel = document.querySelector('#carouselExampleDark');

carousel.addEventListener('slid.bs.carousel', animateHeroText);


const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        items.forEach(item => {

            item.classList.remove("fade-in");

            if (filter === "all") {

                item.classList.remove("hide");

                setTimeout(() => {
                    item.classList.add("fade-in");
                }, 50);

            }

            else if (item.classList.contains(filter)) {

                item.classList.remove("hide");

                setTimeout(() => {
                    item.classList.add("fade-in");
                }, 50);

            }

            else {

                item.classList.add("hide");

            }

        });

    });

});