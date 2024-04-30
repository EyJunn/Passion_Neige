async function HandleLogin() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let user = {
    email: email,
    password: password,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  };

  let apiRequest = fetch("http://localhost:3005/user/login", request);
  let response = await apiRequest;
  if (response.status === 200) {
    window.localStorage.setItem("jwt", "jwt");

    setTimeout(() => {
      window.location.href = "../../Html/Accueil/Accueil.html";
    }, 1000);
  }
}

async function HandleRegister() {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#mail").value;
  let password = document.querySelector("#Password").value;

  let user = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  };

  let apiRequest = fetch("http://localhost:3005/user/register", request);
  let response = await apiRequest;
  if (response.status === 200) {
    setTimeout(() => {
      window.location.href = "../../Html/Auth/login.html";
    }, 1000);
  }
}
