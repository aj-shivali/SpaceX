const url = new URL(window.location);
let ID = url.searchParams.get("flight");

function getBoardInfo(ID) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.spacexdata.com/v3/launches/${ID}`, {
      method: "GET",
      //   headers: {
      //     Accept: "*/*",
      //   },
      //   body: JSON.stringify(value),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        console.log("Error: " + err);
        reject(err);
      });
  });
}
getBoardInfo(ID);

function fillBoardInfo() {
  getBoardInfo(ID).then((data) => {
    let flightNo = document.getElementById("flight-no");
    flightNo.innerText = "Flight number: " + data.flight_number;
    console.log(flightNo);

    let missionName = document.getElementById("mission");
    missionName.innerText = "Mission Name: " + data.mission_name;
    let launchYear = document.getElementById("launch-year");
    launchYear.innerText = "Launch-Year: " + data.launch_year;
    let rocketId = document.getElementById("rocket-id");
    rocketId.innerText = "Rocket-ID: " + data.rocket.rocket_id;
    let rocketType = document.getElementById("rocket-type");
    rocketType.innerText = "Rocket-Type: " + data.rocket.rocket_type;

    let youtube = document.getElementById("youtube");
    console.log(youtube);
    if (data.links.video_link != null) {
      const video = getId(data.links.video_link);
      const src = "//www.youtube.com/embed/" + video;
      console.log(src);
      youtube.setAttribute("src", src);
    } else {
      let cardvideo = document.getElementById("card-video");
      let text = document.createTextNode("URL is NULL");
      // text.style.textAlign = "center"
      cardvideo.append(text);
    }

    let rocketInfo = document.getElementById("rocket-info");
    rocketInfo.innerText =
      "Rocket Name: " +
      data.rocket.rocket_name +
      " \nRocket ID: " +
      data.rocket.rocket_id +
      "\n Rocket Type: " +
      data.rocket.rocket_type;
    let stage1 = document.getElementById("stage-1");
    stage1.innerText =
      "Core Serial: " +
      data.rocket.first_stage.cores[0].core_serial +
      "\n Flight: " +
      data.rocket.first_stage.cores[0].flight;
    //   let stage1 = document.getElementById('stage-1');
    let stage2 = document.getElementById("stage-2");

    for (let i = 0; i < data.rocket.second_stage.payloads.length; i++) {
      let allData = `<p>PAYLOAD:  
  ${i} 
  Block:  </br>
  ${data.rocket.second_stage.block}
  Cap Serial:  </br>
  ${data.rocket.second_stage.payloads[i].cap_serial}
   Customers:  </br>
  ${data.rocket.second_stage.payloads[i].customers} 
   Manufacturer:  </br>
  ${data.rocket.second_stage.payloads[i].manufacturer}
    Nationality:  </br>
 ${data.rocket.second_stage.payloads[i].nationality}</p>`;
      stage2.innerHTML = allData;
    }
  });
}

fillBoardInfo();

function getId(URL) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = URL.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
