/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let icons = ["♦", "♥", "♠", "♣"];
let numbers = [
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

function Cardgenerator() {
  let randomIcon = Math.floor(Math.random() * icons.length);
  let getRandomIcon = icons[randomIcon];

  let randomNumber = Math.floor(Math.random() * numbers.length);
  let getRandomNumber = numbers[randomNumber];

  cardheader.innerHTML = getRandomIcon;
  cardcenter.innerHTML = getRandomNumber;
  cardfooter.innerHTML = getRandomIcon;
}
Cardgenerator();
