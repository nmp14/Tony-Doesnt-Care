let chemicalSubmitBtn;

if (window.location.pathname === "/addForm") {
    chemicalSubmitBtn = document.getElementById("chemicalSubmit");
}

const submitChemical = async (e) => {
    e.preventDefault();

    const body = {}

    const name = document.getElementById("chemicalName").value;
    const location = document.getElementById("chemicalLocation").value;
    const distributor = document.getElementById("chemicalDistributor").value;
    const serialCode = document.getElementById("chemicalSN").value;
    const user_id = parseInt(document.getElementById("memberOptions").value);
    const details = document.getElementById("chemicalDetails").value;

    const arr = [name, location, distributor, serialCode, user_id, details];
    const arrNames = ["name", "location", "distributor", "serial_code", "user_id", "details"];

    if (!name) {
        const div = document.createElement("p");
        div.setAttribute("class", "red mx-3");
        div.innerHTML = "Please provide a name for the chemical";

        document.querySelector("form").append(div);

        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            body[arrNames[i]] = arr[i];
        }
    }

    const results = await fetch("/api/chemicals", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    });

    if (results.ok) {
        document.location.replace("/storage");
    } else {
        const div = document.createElement("p");
        div.setAttribute("class", "red mx-3");
        div.innerHTML = "Failed to create, something went wrong";

        document.querySelector("form").append(div);
    }
}

if (window.location.pathname === "/addForm") {
    chemicalSubmitBtn.addEventListener("click", submitChemical);
}