function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let hashedPassword = hashPassword(password); // Hash the password before saving
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", hashedPassword);
    alert("Successfully Sign up!!");
}

function hashPassword(password) {
    // Implement a strong hashing algorithm like bcrypt or SHA-256
    // For simplicity, we'll use a basic hashing function (not secure for real-world use)
    let hash = 0, i, chr;
    if (password.length === 0) return hash;
    for (i = 0; i < password.length; i++) {
        chr   = password.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
}