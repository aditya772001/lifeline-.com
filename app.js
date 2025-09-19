const auth = firebase.auth();

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "Registration successful! Please log in.";
    })
    .catch((error) => {
      document.getElementById("message").innerText = error.message;
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("message").style.color = "green";
      document.getElementById("message").innerText = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html"; // redirect to hospital dashboard or home
      }, 1500);
    })
    .catch((error) => {
      document.getElementById("message").style.color = "#e53935";
      document.getElementById("message").innerText = error.message;
    });
}
