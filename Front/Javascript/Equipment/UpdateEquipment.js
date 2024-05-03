const logout = document.querySelector("#Logout");

logout.addEventListener("click", () => {
  window.localStorage.clear();

  setTimeout(() => {
    window.location.href = "../../Html/Auth/Login.html";
  }, 1000);
});

async function EndEditEvent() {
  const id = localStorage.getItem("id");
  let jwt = window.localStorage.getItem("jwt");

  let name = document.querySelector("#name").value;
  let Description = document.querySelector("#Description").value;
  let Age = document.querySelector("#Age").value;
  let stock = document.querySelector("#Stock").value;

  let update1 = {
    equipment_name: name,
    equipment_description: Description,
    equipment_size: Age,
    equipment_stock: stock,
  };

  let request = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(update1),
  };

  const update = await fetch(
    `http://localhost:3005/equipment/updateEquipment/${id}`,
    request
  );

  if (update.status === 200) {
    window.location.href = "../../Html/Accueil/Accueil.html";
  }
}
