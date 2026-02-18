document.getElementById("bookBtn").addEventListener("click", function (e) {
  e.preventDefault();

  Calendly.initPopupWidget({
    url: "https://calendly.com/btcimroy20/30min",
  });
});

let marque_div = document.querySelector("#marque-div");
console.log(marque_div);
let marque_logos_node = marque_div.querySelectorAll("img");
const logo_arr_length = marque_logos_node.length;
const marque_logos_arr = [...marque_logos_node];

marque_logos_arr.forEach((marque_logo) => {
  const addMarqueLogo = document.createElement("img");
  addMarqueLogo.src = marque_logo.src;
  addMarqueLogo.alt = marque_logo.alt;
  addMarqueLogo.loading = marque_logo.loading;

  marque_div.append(addMarqueLogo);
  marque_div = document.querySelector("#marque-div");
  marque_logos_node = marque_div.querySelectorAll("img");
});

let part_ul = document.querySelector(".part-ul");
part_ul.classList.add("part-ul-flex");

const list = [
  "Lorem ipsum dolor sit amet consectetur. Lobortis massa urna dapibus amet massa ullamcorper eget facilisi",
  "Lorem ipsum dolor sit amet consectetur. Lobortis massa urna dapibus amet massa ullamcorper eget facilisi",
  "Lorem ipsum dolor sit amet consectetur. Lobortis massa urna dapibus amet massa ullamcorper eget facilisi",
  "Lorem ipsum dolor sit amet consectetur. Lobortis massa urna dapibus amet massa ullamcorper eget facilisi",
];
const list_element = [];

list.forEach((li) => {
  const lis = document.createElement("li");
  const img = document.createElement("img");
  img.src = "../assets/img/marqui_logo/right_icon.png";
  lis.appendChild(img);
  const span = document.createElement("span");
  span.textContent = li;
  lis.classList.add("flex", "center");
  lis.appendChild(span);
  lis.classList.add("part-ul-flex-li");
  list_element.push(lis);
});

part_ul.append(...list_element);
console.log(list_element);

// const nav_desk = document.getElementsByTagName("nav")[0];
// const nav_mobile = document.getElementById("nav-mobile");
// const nav_mobile_classList = [...nav_mobile.classList];
// console.log(nav_mobile_classList);
// let width = window.innerWidth;
// const nav_change = () => {
//   const width = window.innerWidth;
//   //console.log(width);
//   if (width < 640) {
//     nav_mobile.replaceChildren();
//     nav_desk.classList.remove("flex");
//     nav_desk.classList.add("hidden");
//     if (nav_mobile_classList.includes("hidden")) {
//       nav_mobile.classList.add("flex");
//       nav_mobile.classList.remove("hidden");
//     }
//   } else {
//     nav_desk.classList.add("flex");
//     nav_desk.classList.remove("hidden");
//     nav_mobile.classList.add("hidden");
//     nav_desk.classList.remove("flex");
//   }
// };
// window.addEventListener("resize", nav_change);
// document.addEventListener("DOMContentLoaded", nav_change);
