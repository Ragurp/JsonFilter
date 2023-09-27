let boxes = document.querySelector(".boxes");
let input = document.querySelector("input");

fetch("jsonfilter.json")
  .then((response) => response.json())
  .then((data) => {
    array = data;
    display();
  });

// function display(array).....................
function display() {
  array.forEach((elmnt) => {
    boxes.innerHTML += displayContent(elmnt);
  });
}

// function displaContent................
function displayContent(obj) {
  return `<div class="box">
    <p>${obj.name}<span>&dollar;${obj.rate}</span></p>
  </div>`;
}

// input.addEventListener.................
input.addEventListener("keyup", search);
function search() {
  boxes.innerHTML = "";
  array.forEach((x) => {
    let inputValue = input.value.toLowerCase();
    var rate = String(x.rate);
    var name = x.name.toLowerCase();

    if (name.includes(inputValue) || rate.includes(inputValue)) {
      boxes.innerHTML += displayContent(x);
    }
  });
}