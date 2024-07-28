document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const modmeId = document.getElementById("modmeId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const correctModmeId = "123456";
    const correctPassword = "78900";

    if (modmeId === correctModmeId && password === correctPassword) {
      errorMessage.textContent = "";
      alert("Mars spacega xush kelibsiz!");
    } else {
      errorMessage.textContent = "ID yoki parol xato";
    }
  });
