function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        return true; 
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}
