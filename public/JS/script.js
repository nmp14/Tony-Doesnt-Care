const chemDeleteBtns = document.querySelectorAll(".chemical-delete-button");
const confirmChemDeleteBtn = document.getElementById("confirmChemDelete");
const chemicalAlphabet = document.getElementById("alphabet");

// Function to add chemical name to modal
const promptModal = async function (e) {
    e.preventDefault();

    const ID = parseInt(this.getAttribute("data-id"));

    const modalName = document.getElementById("modalChemicalName");
    modalName.innerHTML = this.getAttribute("data-name");
    // If confirm btn exists, add chemical id to it.
    if (confirmChemDeleteBtn) confirmChemDeleteBtn.setAttribute("data-id", ID);
}

//Function to delete chemicals
const deleteChemical = async function (e) {
    e.preventDefault();

    const ID = parseInt(this.getAttribute("data-id"));

    const deleteResponse = await fetch(`/api/chemicals/${ID}`, {
        method: "DELETE"
    });

    if (deleteResponse.ok) {
        document.location.reload();
    } else {
        console.log("error");
    }
}

// List item letters to filter chemicals by
const createAlphabet = () => {
    for (let i = 65; i < 91; i++) {
        const letter = String.fromCharCode(i);
        const li = document.createElement("li");
        li.innerHTML = letter;
        if (letter && li) li.addEventListener("click", sortChemicalsByLetter);
        chemicalAlphabet.append(li);
    }
}
// Sort chemicals based on letter clicked
const sortChemicalsByLetter = (e) => {
    e.preventDefault();
    console.log("placeholder");
}

// Chemical delete btns and add event listener
if (chemDeleteBtns) {
    for (const btn of chemDeleteBtns) {
        btn.addEventListener("click", promptModal);
    }
}

// Confirm button on modal for deleting chemical
if (confirmChemDeleteBtn) confirmChemDeleteBtn.addEventListener("click", deleteChemical);
if (document.location.pathname === "/storage") createAlphabet();