/** ============================== Toggle menu Navbar =============================== */

let toggleBtn = document.querySelector(".links-container .toggle-menu");

let tLink = document.querySelector(".links-container .allLinks");

toggleBtn.onclick = function(e) {
    // Stop Propagation
    e.stopPropagation();
    toggleBtn.classList.toggle("menu-active");

    // Toggle Class 'open' On Links
    tLink.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== tLink) {
        // Check If Menu Is Open

        if (tLink.classList.contains("open")) {
            // Toggle Class 'menu-active' On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class 'open' On Links
            tLink.classList.toggle("open");
        }
    }
});

// Stop Propagation On Menu
tLink.onclick = function(e) {
    // Stop Propagation
    e.stopPropagation();
};
/*   ============================ */
let register = document.querySelector(".register");
let wrap = document.querySelector(".wrap");
let hello = document.querySelector(".hello");
let bg = document.querySelector(".bg");
let marwa = document.querySelector(".marwa");

register.addEventListener('click', (e) => {
    e.preventDefault();
    wrap.className = 'sign-in';
    hello.style.display = 'block';
    // bg.style.display = 'block';
    wrap.style.display = 'none';
})
register.addEventListener('ontouchstart', (e) => {
    e.preventDefault();
    wrap.className = 'sign-in';
    hello.style.display = 'block';
    // bg.style.display = 'block';
    wrap.style.display = 'none';
})


// register.onclick = function(e) {
//     e.preventDefault();
//     wrap.className = 'sign-in';
//     hello.style.display = 'block';
//     // bg.style.display = 'block';
//     wrap.style.display = 'none';
// }


// $("#register").click(function() {
//     $("#wrap").animate({
//         opacity: 0.25
//     }, 5000, function() {
//         // Animation complete.
//     });
// });