const marque_div = document.querySelector("#marque-div");
const marque_logos = marque_div.querySelectorAll("img");
//console.log(marque_div,marque_logo)

for (const marque_logo of marque_logos) {
  const addMarqueLogo = document.createElement("img");
  addMarqueLogo.src = marque_logo.src;
  addMarqueLogo.alt = marque_logo.alt;
  addMarqueLogo.loading = marque_logo.loading;
  marque_div.append(addMarqueLogo);
}
