
// Select button and message paragraph
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

// Add click event to button
greetBtn.addEventListener("click", () => {
  greetMsg.textContent = "Hello there, thanks for clicking. This is my assignment. I hope i have met the expected deriverables!"; // Show greeting
});





// DARK/LIGHT MODE TOGGLE
const toggleTheme = document.getElementById("toggleTheme");
// Toggle "dark-mode" class on body when button is clicked
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// COUNTER
let count = 0; // Counter variable
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Increase button adds +1
increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// Reset button sets counter back to 0
resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});



// Part 3: Form Validation


// Select form and feedback area
const signupForm = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

// Form submit event
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from reloading page

  // Get user input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let messages = []; // Store error messages

  // Name validation
  if (name.length < 3) {
    messages.push("Name must be at least 3 characters long.");
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messages.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    messages.push("Password must be at least 6 characters long.");
  }

  // Show error or success messages
  if (messages.length > 0) {
    feedback.innerHTML = `<p id="error">${messages.join("<br>")}</p>`; // Show errors
  } else {
    feedback.innerHTML = `<p id="success">✅ Form submitted successfully!</p>`;
    signupForm.reset(); // Clear form fields
  }
});
