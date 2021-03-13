const bossCard = document.getElementById("bossCard");
const memberCards = document.getElementById("memberCards");
const graduatedCards = document.getElementById("graduatedCards");

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// DOM is loaded and ready for manipulation here
docReady(function () {
    const init = () => {
        if (window.location.pathname === "/members") {
            renderCards();
        }
    }

    const renderCards = () => {

    }

    init();
});