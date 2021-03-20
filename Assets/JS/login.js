const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const register = async (event) => {
    event.preventDefault();

    const emailRegister = document.getElementById("emailRegister").value.trim();
    const passwordRegister = document.getElementById("passwordRegister").value.trim();
    const userName = document.getElementById("userName").value.trim();

    if (userName && emailRegister && passwordRegister) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ name: userName, email: emailRegister, password: passwordRegister }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Something went wrong");
        }
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


registerBtn.addEventListener("click", register);
loginBtn.addEventListener("click", login);