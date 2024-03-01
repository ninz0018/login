function clk(val) {
    let buttons = document.querySelectorAll('.action'); // Get all buttons with the 'action' class
    buttons.forEach(button => { // Iterate through each button
        if (button !== val) { // Check if the button is not the clicked one
            button.classList.remove("active"); // Remove the 'active' class from the button
        }
    });
    val.classList.toggle("active");
}
