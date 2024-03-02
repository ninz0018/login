function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        return true; 
    } else {
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}