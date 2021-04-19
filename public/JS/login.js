const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const register = async (event) => {
    event.preventDefault();
    // Form inputs
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const name = document.getElementById("userName").value.trim();
    const role_id = parseInt(document.getElementById("registerSelect").value);

    // If all fields entered correctly
    if (name && email && password) {
        const response = await fetch("/api/users/", {
            method: "POST",
            body: JSON.stringify({ name, email, password, role_id }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            const responseJSON = await response.json();
            const error = document.getElementById("sequelizeError");
            // If email taken already
            if (responseJSON.errors[0].message === "user.email must be unique") {
                error.innerHTML = "Email is already in use";
                //If password wrong length
            } else if (responseJSON.errors[0].message === "Validation len on password failed") {
                error.innerHTML = "Password must be 6 chars at minimum"
            } else {
                //Other error is invalid email
                error.innerHTML = "Invalid email"
            }
        }
    } else {
        document.getElementById("missingInfoRegister").classList.remove("hidden");
    }
};

const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email, password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to login");
        }
    }
}

if (registerBtn) registerBtn.addEventListener("click", register);
if (loginBtn) loginBtn.addEventListener("click", login);