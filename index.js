import { data } from "./modules/data.js";

const basketBtn = document.querySelector("nav .basket");
const basketModal = document.querySelector(".basket-modal");

basketBtn.onclick = function () {
  basketModal.style.display = "flex";
};

basketModal.onclick = function (e) {
  if (e.target.getAttribute("data-cancel")) {
    basketModal.style.display = "none";
  }
};
// document.body.onmousemove = (e) => {
//   console.log(e);
// };

// console.log(data);
