/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const icons = ["♦", "♥", "♠", "♣"];
const numbers = [
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

let cardheader = document.querySelector(".header");
let cardcenter = document.querySelector(".main");
let cardfooter = document.querySelector(".footer");

const randomIcon = Math.floor(Math.random() * icons.length);
const randomNumber = Math.floor(Math.random() * numbers.length);

window.onload = function() {
  const getRandomIcon = icons[randomIcon];
  const getRandomNumber = numbers[randomNumber];

  cardheader.innerHTML = getRandomIcon;
  cardcenter.innerHTML = getRandomNumber;
  cardfooter.innerHTML = getRandomIcon;

  if (getRandomIcon == "♥" || getRandomIcon == "♦") {
    cardheader.style.color = "red";
    cardfooter.style.color = "red";
  } else {
    cardheader.style.color = "black";
    cardfooter.style.color = "black";
  }

  // 2 option
  // icons.forEach(icons) => {var Red = (icons == "♥") || (icons == "♦") ? color: red;}
};
