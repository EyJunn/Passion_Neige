let cards = document.querySelector("#cards");

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
}
