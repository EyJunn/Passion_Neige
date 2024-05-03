const LogOUT = document.querySelector("#LogOut");

LogOUT.addEventListener("click", () => {
  window.localStorage.clear();

  setTimeout(() => {
    window.location.href = "../../Html/Auth/Login.html";
  }, 1000);
});

async function createArticle() {
  let image = document.querySelector("#image").value;
  let Description = document.querySelector("#Description").value;
  let name = document.querySelector("#name").value;
  let Age = document.querySelector("#Age").value;
  let Stock = document.querySelector("#Stock").value;

  let jwt = window.localStorage.getItem("jwt");

  let article = {
    equipment_name: name,
    equipment_description: Description,
    image: image,
    equipment_stock: Stock,
    equipment_size: Age,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(article),
  };

  let apiRequest = fetch(
    "http://localhost:3005/equipment/addEquipment",
    request
  );
  let response = await apiRequest;
  if (response.status === 200) {
    window.location.href = "../../Html/Accueil/Accueil.html";
  }
}
