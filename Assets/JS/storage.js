const chemicalList = document.getElementById("chemicalList");

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

testArr = ["name1", "name2", "name3"];

// DOM is loaded and ready for manipulation here
docReady(function () {
    const init = () => {
        fillChemicalUl();
    }

    const fillChemicalUl = () => {
        for (const chemical of testArr) {
            createLi(chemical);
        }
    }

    // Create list items for each chemical and append to uL
    const createLi = (chemical) => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        chemicalList.append(li);

        const row = document.createElement("div");
        row.setAttribute("class", "row");
        li.append(row);

        const col10 = document.createElement("div");
        col10.setAttribute("class", "col-10");
        col10.innerHTML = chemical;
        row.append(col10);

        const col2 = document.createElement("div");
        col2.setAttribute("class", "col-2 flexCol");

        const delBtn = document.createElement("i");
        delBtn.setAttribute("class", "fas fa-minus-square text-crimson delete-button");
        delBtn.addEventListener("click", handleChemicalDelete);
        col2.append(delBtn);

        row.append(col2);

    }

    const handleChemicalDelete = () => {
        //TODO
    }

    init();
});