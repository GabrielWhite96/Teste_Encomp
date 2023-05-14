// function login() {
//   const name = document.getElementById("username").value;
//   const password = document.getElementById("password").value; 

//   if (name == "adm" && password == "adm") {
//       window.location.href = "../pages/home_page.html"
//   }else{
//     window.alert("Dados incorretos, tente novamente");
//   }
// }

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (validCredentials(username, password)) {
    alert("Login bem-sucedido!");
    redirectToHome();
  } else {
    alert("Nome de usuário ou senha incorretos. Por favor, tente novamente.");
    clearInputs();
  }
}

function validCredentials(username, password) {
  const validUsername = "adm";
  const validPassword = "adm";
  return (username === validUsername && password === validPassword);
}

function redirectToHome() {
  window.location.href = "../pages/home_page.html";
}

function clearInputs() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}
alert("Dica: usuário e senha são adm");
