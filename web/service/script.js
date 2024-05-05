let itteration = 1;
let isPopUp = false;

function switchTrue(){
  isPopUp = false;
}

function addElement() {


  const htmlElement = `
  <!--Element ${itteration + 1}-->
      <div class="card mt-3 mb-3" style="font-size: 1rem; width: 20rem;">
        <div class="card-header ">
          Electrical Element
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">Component Name</span>
              <input id="name_input${itteration + 1}" type="text" class="form-control" placeholder="" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">Watt</span>
              <input id="watt_input${itteration + 1}" type="number" class="form-control" placeholder="" aria-label="Username"
                aria-describedby="basic-addon1" min="1" max="999">
            </div>
          </li>
          <li class="list-group-item">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">Jam Pemakian/Hari</span>
              <input id="usage_input${itteration + 1}" type="number" class="form-control" placeholder="" aria-label="Username"
                aria-describedby="basic-addon1" min="1" max="999">
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-center">
            <button class="btn btn-primary" type="button" style="width: 25rem; height: 3rem;"
              onclick="deleteElement(this)">Delete</button>
          </li>

        </ul>
      </div>
  
  `;
  console.log("itteration ",itteration)
  itteration++;
  document.getElementById("component_list").innerHTML += htmlElement;
}

function deleteElement(button) {
  const parentElement = button.closest('.card');
  if (parentElement) {
    parentElement.remove();
  }
}

function drawChart() {

  let nameArray = [];
  let wattArray = [];
  let usageArray = [];

  let tariff = document.getElementById("tariff").value;
  const token = document.getElementById("token").value;
  if (tariff === "") tariff = 1352;

  for (let i = 0; i <= itteration; i++) {

    try {
      const name = document.getElementById(`name_input${i}`).value;
      const watt = document.getElementById(`watt_input${i}`).value;
      const usage = document.getElementById(`usage_input${i}`).value;

      console.log(watt);

      nameArray.push(name);
      wattArray.push(watt);
      usageArray.push(usage);
    }
    catch (err) {
      continue;
    }
  }

  console.log(nameArray);
  console.log(nameArray.length)

  const isWattArrayEmpty = wattArray.includes("");
  const isNameArrayEmpty = nameArray.includes("");
  const isUsageArrayEmpty = usageArray.includes("");

  if ((isNameArrayEmpty || isWattArrayEmpty || isUsageArrayEmpty) && !isPopUp) {

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="switchTrue()"></button>',
        '</div>'
      ].join('')

      isPopUp = true;
      alertPlaceholder.append(wrapper)
    }

    appendAlert("Input can't empty, Please input something", 'danger')
    return;
  }
  
  if(isNameArrayEmpty || isWattArrayEmpty || isUsageArrayEmpty)return;

  let totalWattUsage = wattArray.map((total, index) => {
    return total * usageArray[index]
  })

  const day = totalWattUsage.reduce((acc, curr) => acc + curr + 0)
  const week = day * 7;
  const month = day * 30;

  const floatArray = wattArray.map(str => parseFloat(str));

  let totalWatt1 = floatArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.getElementById("Label_total_watt").textContent = "Total Watt = " + totalWatt1;

  const kWhArray = [(day / 1000) * tariff, (week / 1000) * tariff, (month / 1000) * tariff]

  document.getElementById("pieChart").setAttribute('style', 'width:100%;max-width:700px;');
  document.getElementById("barChart").setAttribute('style', 'width:100%;max-width:700px;');

  const xValues = [...nameArray];
  const yValues = [...wattArray];
  const barColors = [
    "red",
    "green",
    "violet",
    "blue",
    "brown",
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "aqua",
    "yellow",
    "purple"
  ];

  //console.log(nameArray)
  //console.log(wattArray)

  new Chart("pieChart", {
    type: "pie",
    data: {
      labels: nameArray,
      datasets: [{
        backgroundColor: barColors,
        data: wattArray
      }]
    },
    options: {
      title: {
        display: true,
        text: "Watt Consumtion Distribution"
      }
    }
  });


  const xValues1 = ["Day", "Week", "Month"];
  const yValues1 = [...kWhArray];

  new Chart("barChart", {
    type: "bar",
    data: {
      labels: xValues1,
      datasets: [{
        backgroundColor: barColors,
        data: yValues1
      }]
    },
    options: {
      legend: { display: false },
      scales: {

        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Rupiah'
          }
        }]
      },
      title: {
        display: true,
        text: "Electricity Cost"
      }
    }
  });

  if (token === "") return;

  document.getElementById("graphChart").setAttribute('style', 'width:100%;max-width:40rem;');

  const kWhPerDay = day / 1000;
  const day_forecast = token / kWhPerDay;
  const xValueLabel = [0];
  const yValueLabel = [token];

  let total = token;


  for (let i = 1; i <= day_forecast + 1; i++) {
    xValueLabel.push(`${i}`);
    total = total - kWhPerDay;

    if (total < 0) {
      yValueLabel.push(0)
    }
    else {
      yValueLabel.push(total)
    }
  }

  new Chart("graphChart", {
    type: "line",
    data: {
      labels: xValueLabel,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValueLabel
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Day'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'kWh'
          }
        }]
      },
      title: {
        display: true,
        text: "Electricity Token Forecast"
      }
    }
  });
}