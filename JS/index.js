const marque_div = document.querySelector("#marque-div");
const marque_logos_node = marque_div.querySelectorAll("img");
const marque_logos_arr=[...marque_logos_node]
marque_logos_arr.push(...marque_logos_arr)
//console.log(marque_div, marque_logos_arr);

marque_logos_arr.forEach((marque_logo) => {
  const addMarqueLogo = document.createElement("img");
  addMarqueLogo.src = marque_logo.src;
  addMarqueLogo.alt = marque_logo.alt;
  addMarqueLogo.loading = marque_logo.loading;
  marque_div.append(addMarqueLogo);
});

