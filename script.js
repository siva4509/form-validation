document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("fstname");
  const lastName = document.getElementById("lstname");
  const email = document.getElementById("email");
  const phone = document.getElementById("mobno");
  const password = document.getElementById("pass");
  const confirmPassword = document.getElementById("confirmpass");
  const emailError = document.getElementById("emailError");

  let isValid = true;

  [firstName, lastName, email, phone, password, confirmPassword].forEach(input => {
    input.classList.remove("valid", "invalid");
  });

  if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() ||
      !phone.value.trim() || !password.value || !confirmPassword.value) {
    alert("All fields are required.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add("invalid");
    emailError.style.display = "block";
    isValid = false;
  } else {
    email.classList.add("valid");
    emailError.style.display = "none";
  }

  if (phone.value.length !== 10 || isNaN(phone.value)) {
    phone.classList.add("invalid");
    isValid = false;
  } else {
    phone.classList.add("valid");
  }

  if (password.value !== confirmPassword.value) {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    isValid = false;
  } else {
    password.classList.add("valid");
    confirmPassword.classList.add("valid");
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.submit(); 
  }
});
