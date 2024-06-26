let cards = document.querySelector("#cards");
let logOut = document.querySelector("#LogOut");

logOut.addEventListener("click", () => {
  window.localStorage.clear();

  setTimeout(() => {
    window.location.href = "../../Html/Auth/Login.html";
  }, 1000);
});

async function getAllEquipment() {
  let jwt = window.localStorage.getItem("jwt");

  let request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${jwt}`,
    },
  };

  let apiRequest = await fetch(
    "http://localhost:3005/equipment/getAllEquipment",
    request
  );
  let response = await apiRequest.json();
  const stuff = response.rows;
  stuff.forEach((equipment) => {
    cards.innerHTML += `<div class= "flex justify-center text-center border-solid border-2 border-white w-1/4 bg-cyan-500 bg-opacity-60 m-10 card rounded  "><div><img src="${
      equipment.image
    }" class='w-48 h-48 object-cover border-r-2'></div><div class= "w-auto h-auto mx-6 my-6 text-center "> <h2>${
      equipment.equipment_name
    }</h2> <p>${equipment.equipment_description}</p> <p>${
      equipment.equipment_size
    } ans</p> <p>${equipment.equipment_stock}</p>${
      response.role === "admin"
        ? `<button onclick="Modifier('${equipment.equipment_id}')" class="mx-1 modifier ${equipment.equipment_id} ">Modifier</button><button class="mx-1 delete" onclick="deleteArticle('${equipment.equipment_id}') ">Supprimer</button>`
        : ""
    }</div></div> `;
  });
}

getAllEquipment();

function Modifier(id) {
  localStorage.setItem("id", id);
  window.location.href = "../../Html/Equipment/Update.html";
}

async function deleteArticle(id) {
  let jwt = window.localStorage.getItem("jwt");

  if (!jwt) {
    console.log("Jwt invalid");
  }

  let request = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${jwt}`,
    },
  };

  await fetch(`http://localhost:3005/equipment/deleteEquipment/${id}`, request);

  window.location.reload();
}
