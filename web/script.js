let itteration = 1;

function addElement(){
    const htmlElement = `
    
    <!--Element ${itteration+1}-->
    <div class="card mt-3 mb-3" style="">
      <div class="card-header ">
        Electrical Element
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" >
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Component Name</span>
            <input id="name_input${itteration}" type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Watt</span>
            <input id="watt_input${itteration}" type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" min="1" max="999">
          </div>
        </li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Jam Pemakian/Hari</span>
            <input id="usage_input${itteration}" type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" min="1" max="999">
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-center">
          <button class="btn btn-primary" type="button" style="width: 25rem; height: 3rem;" onclick="deleteElement(this)">Delete</button>
        </li>
        
      </ul>
    </div>

    `;
    itteration++;
    document.getElementById("component_list").innerHTML += htmlElement;
}

function deleteElement(button) {
    const parentElement = button.closest('.card');
    if (parentElement) {
        var parentId = parentElement.id;
        parentElement.remove();
        console.log('Deleted element with ID:', parentId);
    }
}

function drawChart(){

  let nameArray = [];
  let wattArray = [];
  let usageArray = [];

  const tariff = document.getElementById("tariff").value;
  const token = document.getElementById("token").value;

  for(let i=0; i<itteration;i++){
    
    const name = document.getElementById(`name_input${i}`).value;
    const watt = document.getElementById(`watt_input${i}`).value;
    const usage = document.getElementById(`usage_input${i}`).value;

    nameArray.push(name);
    wattArray.push(watt);
    usageArray.push(usage);

    //console.log(`${name} ${watt} ${usage}`);
  }

  let totalWattUsage = wattArray.map((total,index)=>{
    return total*usageArray[index]
  })
  //console.log(totalWattUsage);
  const day = totalWattUsage.reduce((acc,curr)=> acc+curr+0)
  const week = day*7;
  const month = day*30;

  const kWhArray = [(day/1000)*tariff,(week/1000)*tariff,(month/1000)*tariff]

    document.getElementById("pieChart").setAttribute('style', 'width:100%;max-width:700px;');
    document.getElementById("barChart").setAttribute('style', 'width:100%;max-width:700px;');
    document.getElementById("graphChart").setAttribute('style', 'width:100%;max-width:40rem;');

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

    new Chart("pieChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
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
    //const barColors1 = ["red", "green","blue"];

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
        legend: {display: false},
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

    const kWhPerDay = day/1000;
    const day_forecast = token/kWhPerDay;
    const xValueLabel = [0];
    const yValueLabel = [token];
    console.log(day_forecast)
    console.log(token)
    //console.log(total);
    //console.log("day: ",day)
    let total = token;
    //console.log("token total ",total);

    for(let i=1;i<=day_forecast+1;i++){
      xValueLabel.push(`${i}`);
      //console.log(total);
      total = total-kWhPerDay;
      //console.log(total);
      
      if(total < 0){
        yValueLabel.push(0)
      }
      else{
        yValueLabel.push(total)
      }
    }

    console.log(yValueLabel);

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
        legend: {display: false},
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