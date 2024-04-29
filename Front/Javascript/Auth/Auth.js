async function HandleLogin() {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

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

  let apiRequest = fetch("http://localhost:3005/user/loginUser", request);
  let response = await apiRequest;
  if (response.status === 200) {
    window.localStorage.setItem("jwt");

    // setTimeout(() => {
    //   window.location.href = "../../Html/Accueil/Accueil.html";
    // }, 1000);
  }
}
