document.getElementById("bookBtn").addEventListener("click", function (e) {
  e.preventDefault();

  Calendly.initPopupWidget({
    url: "https://calendly.com/btcimroy20/30min",
  });
});
document.getElementById("affiliateBtn").addEventListener("click", function (e) {
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

const affiliate = document.getElementById("affiliate-card-container");

const list_title = [
  "Click get leads",
  "Share with clients",
  "Earns referral fees",
];
const list_txt = [
  "Lorem ipsum dolor sit amet consectetur. Tristique molestie feugiat ornare in morbi nunc fringilla. Bibendum urna diam tincidunt elementum tristique placerat nisl egestas nunc. ",
  "Lorem ipsum dolor sit amet consectetur. Tristique molestie feugiat ornare in morbi nunc fringilla. Bibendum urna diam tincidunt elementum tristique placerat nisl egestas nunc. ",
  "Lorem ipsum dolor sit amet consectetur. Tristique molestie feugiat ornare in morbi nunc fringilla. Bibendum urna diam tincidunt elementum tristique placerat nisl egestas nunc. ",
];

const list_img = [
  "../assets/img/affliate/img_1.jpg",
  "../assets/img/affliate/img_2.jpg",
  "../assets/img/affliate/img_3.jpg",
];

list_title.forEach((li_t, idx) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const card_img_div = document.createElement("div");
  card_img_div.classList.add("card_img_div");
  const card_img = document.createElement("img");
  card_img.src = list_img[idx];
  card_img.loading = "lazy";
  card_img.classList.add("card_img");
  card_img_div.appendChild(card_img);
  card.appendChild(card_img_div);
  const card_content = document.createElement("div");
  card_content.classList.add("card-content");
  const card_h1 = document.createElement("h1");
  card_h1.classList.add("card-h1");
  card_h1.textContent = li_t;
  const card_p = document.createElement("p");
  card_p.classList.add("card-p");
  card_p.textContent = list_txt[idx];
  card_content.appendChild(card_h1);
  card_content.appendChild(card_p);
  card.appendChild(card_content);
  card.style.fontFamily = `"Poppins", sans-serif`;
  affiliate.appendChild(card);
});

let count = 0;
const nextBtn = document.getElementById("nextCard");
const prevBtn = document.getElementById("prevCard");

nextBtn.addEventListener("click", () => {
  const totalCards = affiliate.children.length;
  if (window.innerWidth <= 640) {
    count++;
    if (count >= totalCards) {
      count = 0;
    }
    const offset = count * 100;
    affiliate.style.transform = `translateX(-${offset}%)`;
  }
});
prevBtn.addEventListener("click", () => {
  if (window.innerWidth <= 640) {
    const totalCards = affiliate.children.length;
    count--;
    if (count < 0) {
      count = totalCards - 1;
    }
    const offset = count * 100;
    affiliate.style.transform = `translateX(-${offset}%)`;
  }
});

const nextPrev = () => {
  if (window.innerWidth < 640) {
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    count = 0;
    affiliate.style.transform = "translateX(0)";
  }
};
window.addEventListener("resize", nextPrev);
nextPrev();

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
