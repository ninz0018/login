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
function signUp(username, password) {
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    
    // Store the username and hashed password in a database
    // This step would involve making a database query or API call to save the data
}

// Example code for sign-in
function signIn(username, password) {
    // Retrieve the stored hashed password associated with the username
    const storedHashedPassword = getUserHashedPassword(username); // Hypothetical function
    
    // Hash the entered password
    const enteredHashedPassword = bcrypt.hashSync(password, saltRounds);
    
    // Compare the hashed passwords
    if (storedHashedPassword === enteredHashedPassword) {
        console.log('Sign-in successful');
    } else {
        console.log('Incorrect username or password');
    }
}