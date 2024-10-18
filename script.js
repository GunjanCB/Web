document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
      alert("Please fill in all login fields.");
    } else {
      alert("Login successful!");
    }
  });

  document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const firstName = document.getElementById("signupFirstName").value;
      const lastName = document.getElementById("signupLastName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === ""
      ) {
        alert("Please fill in all signup fields.");
      } else {
        alert("Signup successful!");
      }
    });
});
