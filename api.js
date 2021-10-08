// const { type } = require("os");

function getUpcoming() {
  return new Promise((resolve, reject) => {
    fetch("https://api.spacexdata.com/v3/launches/upcoming", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        // console.log("Error: " + err);
        reject(err);
      });
  });
}

getUpcoming();

function getPast() {
  return new Promise((resolve, reject) => {
    fetch("https://api.spacexdata.com/v3/launches/past", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        // console.log("Error: " + err);
        reject(err);
      });
  });
}

getPast();
