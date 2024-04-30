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
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  };

  let apiRequest = fetch("http://localhost:3005/user/login", request);
  let response = await apiRequest;
  let data = await response.json();
  if (response.status === 200) {
    let jwt = data.jwt;
    let role = data.role;
    window.localStorage.setItem("jwt", jwt);

    window.location.href = "../../Html/Accueil/Accueil.html";
  } else {
    alert("Wrong Id");
  }
}

async function HandleRegister() {
  let firstName = document.querySelector(".first_name").value;
  let lastName = document.querySelector(".last_name").value;
  let email = document.querySelector(".mail").value;
  let password = document.querySelector(".Password").value;

  let user = {
    first_name: firstName,
    last_name: lastName,
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

  let apiRequest = fetch("http://localhost:3005/user/register", request);
  let response = await apiRequest;
  if (response.status === 200) {
    setTimeout(() => {
      window.location.href = "../../Html/Auth/login.html";
    }, 1000);
  }
}
