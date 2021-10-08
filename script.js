// let givenDiv = document.getElementById('div1');
// let givenDiv;
let allUpcomingDiv = document.getElementById("upcoming");
allUpcomingDiv.style.display = "none";
let allPastDiv = document.getElementById("past");
allPastDiv.style.display = "none";
function getFiveUpcoming(givenDiv, i) {
  getUpcoming().then((data) => {
    // let image = data[i].links.patch.small;
    // console.log(image);
    let flightNo = document.createElement("div");
    let missionName = document.createElement("div");
    let date = document.createElement("div");
    // let id = document.createElement("div");
    let datestring;
    let time = document.createElement("div");
    flightNo.textContent = "Flight Number: " + data[i].flight_number;
    missionName.textContent = "\n Mission Name: " + data[i].mission_name;
    datestring = new Date(data[i].launch_date_local);
    // console.log(date);
    let hour = datestring.getHours();
    let minute = datestring.getMinutes();
    time = "Time: " + hour + " : " + minute;
    date.textContent =
      " Date: " +
      datestring.getFullYear() +
      "-" +
      (datestring.getMonth() + 1) +
      "-" +
      datestring.getDate();
    givenDiv.append(flightNo, missionName, date, time);
    // givenDiv.style.backgroundImage = `url(` + image + `)`;
    givenDiv.addEventListener("click", () => {
      window.document.location =
        "./Info.html" + "?flight=" + data[i].flight_number;
    });
  });
}

function getFivePast(givenDiv, i) {
  getPast().then((data) => {
    let id = document.createElement("div");
    id.textContent = "ID: " + data[i].id;
    let flightNo = document.createElement("div");
    let missionName = document.createElement("div");
    let date = document.createElement("div");
    let datestring;
    let time = document.createElement("div");
    flightNo.textContent = "Flight Number: " + data[i].flight_number;
    missionName.textContent = "\n Mission Name: " + data[i].mission_name;
    datestring = new Date(data[i].launch_date_local);
    // console.log(date);
    let hour = datestring.getHours();
    let minute = datestring.getMinutes();
    time = "Time: " + hour + " : " + minute;
    date.textContent =
      " Date: " +
      datestring.getFullYear() +
      "-" +
      (datestring.getMonth() + 1) +
      "-" +
      datestring.getDate();
    givenDiv.append(flightNo, missionName, date, time);
    givenDiv.addEventListener("click", () => {
      console.log("clicked");
      window.document.location =
        "./Info.html" + "?flight=" + data[i].flight_number;
    });
  });
}
let upcoming = document.getElementById("upcoming-container");
let divs = upcoming.childNodes;
// console.log(divs);
let index = 0;
for (let i = 1; i < divs.length; i += 2) {
  id = divs[i].id;
  let givenDiv = document.getElementById(id);
  // console.log(divs[i].id);
  getFiveUpcoming(givenDiv, index);
  index++;
}

let past = document.getElementById("past-container");
let pastDivs = past.childNodes;
console.log(pastDivs);
let ind = 0;

for (let i = 1; i < pastDivs.length; i += 2) {
  id = pastDivs[i].id;
  let givenDiv = document.getElementById(id);
  // console.log(divs[i].id);
  getFivePast(givenDiv, ind);
  ind++;
}

let dispUpcoming = document.querySelector(".upcoming-btn");
let dispPast = document.querySelector(".past-btn");

let allUp = document.getElementById("all-up-btn");
allUp.style.display = "none";

let allpast = document.getElementById("all-past-btn");
allpast.style.display = "none";
dispUpcoming.addEventListener("click", hideupcoming);

function hideupcoming(e) {
  e.preventDefault();
  //   console.log("clicked");
  allUpcomingDiv.style.display = "grid";
  upcoming.style.display = "none";
  past.style.display = "none";
  allUp.style.display = "block";
  getAllUpcoming();
}

dispPast.addEventListener("click", hidepast);

function hidepast(e) {
  e.preventDefault();
  //   console.log("clicked");
  allPastDiv.style.display = "grid";
  upcoming.style.display = "none";
  past.style.display = "none";
  allpast.style.display = "block";
}
allUp.addEventListener("click", hideAllup);
function hideAllup(e) {
  e.preventDefault();
  //   console.log("clicked");
  upcoming.style.display = "grid";
  past.style.display = "grid";
  allUp.style.display = "none";
  allUpcomingDiv.style.display = "none";
}

allpast.addEventListener("click", hideAllpast);
function hideAllpast(e) {
  e.preventDefault();
  //   console.log("clicked");
  upcoming.style.display = "grid";
  past.style.display = "grid";
  allUp.style.display = "none";
  allPastDiv.style.display = "none";
}

function getAllUpcoming() {
  getUpcoming().then((data) => {
    data.forEach((element) => {
      let id = document.createElement("div");
      id.className = "id";
      id.textContent = "ID: " + element.id;
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      let btn = document.getElementById("all-up-btn");
      card.className = "card";
      let flightNo = document.createElement("div");
      let missionName = document.createElement("div");
      let date = document.createElement("div");
      let datestring;
      let time = document.createElement("div");
      flightNo.textContent = "Flight Number: " + element.flight_number;
      missionName.textContent = "\n Mission Name: " + element.mission_name;
      datestring = new Date(element.launch_date_local);
      //   console.log(date);
      let hour = datestring.getHours();
      let minute = datestring.getMinutes();
      time = "Time: " + hour + " : " + minute;
      date.textContent =
        " Date: " +
        datestring.getFullYear() +
        "-" +
        (datestring.getMonth() + 1) +
        "-" +
        datestring.getDate();
      card.append(flightNo, missionName, date, time);
      allUpcomingDiv.insertBefore(card, btn);
      card.addEventListener("click", () => {
        window.document.location =
          "./Info.html" + "?flight=" + element.flight_number;
      });
    });
  });
}

function getAllPast() {
  getPast().then((data) => {
    data.forEach((element) => {
      let id = document.createElement("div");
      id.textContent = "ID: " + element.id;
      let card = document.createElement("div");
      let btn = document.getElementById("all-past-btn");
      card.className = "card";
      let flightNo = document.createElement("div");
      let missionName = document.createElement("div");
      let date = document.createElement("div");
      let datestring;
      let time = document.createElement("div");
      flightNo.textContent = "Flight Number: " + element.flight_number;
      missionName.textContent = "\n Mission Name: " + element.mission_name;
      datestring = new Date(element.launch_date_local);
      //   console.log(date);
      let hour = datestring.getHours();
      let minute = datestring.getMinutes();
      time = "Time: " + hour + " : " + minute;
      date.textContent =
        " Date: " +
        datestring.getFullYear() +
        "-" +
        (datestring.getMonth() + 1) +
        "-" +
        datestring.getDate();
      card.append(flightNo, missionName, date, time);
      allPastDiv.insertBefore(card, btn);
      card.addEventListener("click", () => {
        window.document.location =
          "./Info.html" + "?flight=" + element.flight_number;
      });
    });
  });
}

getAllPast();

// cards.addEventListener("click", redirect);

// INFO HTML
