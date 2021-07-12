const fields = document.querySelectorAll(".container .field");
const btn = document.querySelector(".test-btn");

btn.onclick = () => {
  fields.forEach((field) => {
    console.log(field);
    field.classList.toggle("right");
  });
};
