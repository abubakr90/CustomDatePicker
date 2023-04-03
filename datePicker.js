// get current date
let currentDate = new Date();

// function to update date tile
function updateDateTiles(date) {
  let dateTiles = document.querySelectorAll(".date-tile");
  dateTiles.forEach((tile, index) => {
    let tempDate = new Date(date);
    tempDate.setDate(tempDate.getDate() + index);
    tile.innerHTML = `<div  class="date">
      <div style="font-size:16px;">${getDayOfWeek(tempDate).toLocaleUpperCase()}</div>
      <div style="font-size:12px;">${getMonth(tempDate).toLocaleUpperCase()}</div>
      <div style="font-weight:bold; font-size:28px;">${getDate(tempDate)}</div>
      <div style="font-size:12px;">${tempDate.getFullYear()}</div>
      </div>
    `;
  });
}

// function to handle date tile clicks
function handleDateTileClick(event) {
  let selectedTile = event.currentTarget;
  let dateTiles = document.querySelectorAll(".date-tile");
  dateTiles.forEach((tile) => tile.classList.remove("selected"));
  selectedTile.classList.add("selected");
}

// function to handle arrow button clicks
function handleArrowButtonClick(event) {
  let date = new Date(currentDate);
  let increment = event.target.classList.contains("left") ? -1 : 1;
  date.setDate(date.getDate() + increment);
  currentDate = date;
  updateDateTiles(currentDate);
}

// add event listeners to date tiles
let dateTiles = document.querySelectorAll(".date-tile");
dateTiles.forEach((tile) => tile.addEventListener("click", handleDateTileClick));

// add event listeners to arrow buttons
let leftArrow = document.querySelector(".arrow.left");
let rightArrow = document.querySelector(".arrow.right");
leftArrow.addEventListener("click", handleArrowButtonClick);
rightArrow.addEventListener("click", handleArrowButtonClick);

// initial update of date tiles
updateDateTiles(currentDate);

function getDayOfWeek(date) {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return daysOfWeek[date.getDay()];
}

function getMonth(date) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[date.getMonth()];
}

function getDate(date) {
  let dayOfMonth = date.getDate();
  return dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
}
