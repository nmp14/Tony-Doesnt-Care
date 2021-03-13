const bossCard = document.getElementById("bossCard");
const memberCards = document.getElementById("memberCards");
const graduatedCards = document.getElementById("graduatedCards");

// Test objects before db connection.
const members = [{
    name: "Dr. Albert Stiegman",
    email: "stiegman@fsu.edu",
    role: "boss"
}, {
    id: 2,
    name: "Tony",
    email: "tony@gmail.com",
    role: "student"
}, {
    id: 3,
    name: "cera",
    email: "cera@gmail.com",
    role: "student"
}, {
    id: 4,
    name: "su",
    email: "su@gmail.com",
    role: "graduate"
}];

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
    // Loop through members and call function to create HTML
    const renderCards = () => {
        for (const member of members) {
            generateCard(member);
        }
    }
    // Create html for each member card
    const generateCard = member => {

    }

    init();
});