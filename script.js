// =============================
// HERO BUTTON
// =============================

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", () => {

    alert("Welcome to UrbanGrow 🌱");

});


// =============================
// FEATURE BUTTON
// =============================

const featureBtn =
document.querySelector(".feature-btn");

featureBtn.addEventListener("click", () => {

    alert(
        "More advanced farming features coming soon!"
    );

});


// =============================
// GALLERY BUTTON
// =============================

const galleryBtn =
document.querySelector(".gallery-btn");

galleryBtn.addEventListener("click", () => {

    alert(
        "More gallery images will be added soon."
    );

});


// =============================
// CONTACT FORM VALIDATION
// =============================

const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs =
    document.querySelectorAll(
        "#contactForm input"
    );

    let empty = false;

    inputs.forEach(input => {

        if(input.value.trim() === ""){
            empty = true;
        }

    });

    const textarea =
    document.querySelector("textarea");

    if(textarea.value.trim() === ""){
        empty = true;
    }

    if(empty){

        alert(
            "Please fill all fields."
        );

    }

    else{

        alert(
            "Form submitted successfully!"
        );

        form.reset();

    }

});


// =============================
// SMOOTH NAVIGATION
// =============================

const navLinks =
document.querySelectorAll(
    ".nav-links a"
);

navLinks.forEach(link => {

    link.addEventListener("click",
    function(e){

        e.preventDefault();

        const targetId =
        this.getAttribute("href");

        const target =
        document.querySelector(targetId);

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// =============================
// CARD HOVER ANIMATION
// =============================

const cards =
document.querySelectorAll(
    ".card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter",
    () => {

        card.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.2)";

    });

    card.addEventListener("mouseleave",
    () => {

        card.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.1)";

    });

});


// =============================
// GALLERY ZOOM EFFECT
// =============================

const galleryImages =
document.querySelectorAll(
    ".gallery-grid img"
);

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("active");

    });

});


// =============================
// NAVBAR SCROLL EFFECT
// =============================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.style.background =
        "#ffffff";

        navbar.style.boxShadow =
        "0 3px 15px rgba(0,0,0,0.15)";

    }

    else{

        navbar.style.boxShadow =
        "none";

    }

});


// =============================
// REVEAL ANIMATION
// =============================

const revealElements =
document.querySelectorAll(
".card, .service-box, .gallery-grid img"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(top < screenHeight - 100){

            el.style.opacity = "1";

            el.style.transform =
            "translateY(0px)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "0.6s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// =============================
// COUNTER ANIMATION
// =============================

function animateCounter(
element,
target
){

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }

        else{

            element.innerText =
            target;

        }

    };

    update();

}


// Example

// animateCounter(
// document.getElementById("counter"),
// 500
// );


// =============================
// CURRENT YEAR FOOTER
// =============================

const footerBottom =
document.querySelector(
".footer-bottom"
);

const year =
new Date().getFullYear();

footerBottom.innerHTML =
`© ${year} UrbanGrow`;