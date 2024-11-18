/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suit_list = ["♦", "♥", "♠", "♣"];
let number_list = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let card = document.querySelector("#card");

let upper_symbol = document.querySelector(".row_1");
let lower_symbol = document.querySelector(".row_3");
let number = document.querySelector(".row_2");

let height_button = document.querySelector(".height_button");
let width_button = document.querySelector(".width_button");

let height_input = document.querySelector(".height_input");
let width_input = document.querySelector(".width_input");

function generate_random_card() {
  let chosen_suit = suit_list[Math.floor(Math.random() * suit_list.length)];
  let chosen_number =
    number_list[Math.floor(Math.random() * number_list.length)];
  upper_symbol.innerHTML = chosen_suit;
  lower_symbol.innerHTML = chosen_suit;

  if (chosen_suit == "♦" || chosen_suit == "♥") {
    upper_symbol.style.color = "red";
    lower_symbol.style.color = "red";
  } else {
    upper_symbol.style.color = "black";
    lower_symbol.style.color = "black";
  }

  number.innerHTML = chosen_number;
}
window.onload = function() {
  generate_random_card();
};

card.addEventListener("click", generate_random_card);

setInterval(function() {
  generate_random_card();
}, 1000);

height_button.addEventListener("click", e => change_height(e));

function change_height(e) {
  e.preventDefault();
  if (
    height_input.value &&
    parseInt(height_input.value) > 250 &&
    parseInt(height_input.value) < 600
  ) {
    height_input.style.background = "white";
    card.style.height = `${height_input.value}px`;
  } else {
    if (!isNaN(height_input.value)) {
      height_input.value = "min 250px. max 600";
    }
    height_input.style.background = "red";
  }
}

width_button.addEventListener("click", e => change_width(e));

function change_width(e) {
  e.preventDefault();

  if (
    width_input.value &&
    parseInt(width_input.value) > 300 &&
    parseInt(width_input.value) < 1000
  ) {
    width_input.style.background = "white";
    card.style.width = `${width_input.value}px`;
  } else {
    if (!isNaN(width_input.value)) {
      width_input.value = "min 300px. max 1000px";
    }
    width_input.style.background = "red";
  }
}
