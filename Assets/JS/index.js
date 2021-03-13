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
        const card = `
        <div class="col-lg-4 col-md-6">
            <div class="card mb-4">
                <div class="card-header text-light">
                    <h5 class="card-title">${member.name}</h5>
                    <h6 class="card-subtitle mb-2">${member.role}</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${member.id}</li>
                        <li class="list-group-item">${member.email}</li>
                    </ul>
                </div>
            </div>
        </div>
`

        switch (member.role) {
            case "boss":
                bossCard.innerHTML += card;
                break;
            case "student":
                memberCards.innerHTML += card;
                break;
            case "graduate":
                graduatedCards.innerHTML += card;
                break;
        };
    };

    init();
});