/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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

  // 1 option
  // icons.forEach(icons) => {var Red = (icons == "♥") || (icons == "♦") ? color: red;}

  // 2 option

  // function cardColor() {
  //   if (icons == "♥" || icons == "♦") {
  //     document.getElementsByClassName("header").style.color = "red";
  //     document.getElementsByClassName("footer").style.color = "red";
  //   } else {
  //     document.getElementsByClassName("header").style.color = "black";
  //     document.getElementsByClassName("footer").style.color = "black";
  //   }

  //   cardColor();
  // }
};
