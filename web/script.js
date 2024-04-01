const itteration = 2;

function addElement(){
    const htmlElement = `
    
    <!--Element 1-->
    <div id="element" class="card mt-3 mb-3" style="">
      <div class="card-header ">
        Electrical Element
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" >
          <div class="input-group">
              <label class="input-group-text" for="inputGroupSelect01">Component Type</label>
              <select class="form-select" id="inputGroupSelect01">
                    <option selected>Lamp</option>
                    <option value="1">TV</option>
                    <option value="2">AC</option>
                    <option value="3">Gadget</option>
                    <option value="4">Other</option>
            </select>
          </div>
        </li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Watt</span>
            <input type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" min="1" max="999">
          </div>
        </li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Jam Pemakian/Hari</span>
            <input type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" min="1" max="999">
          </div>
        </li>
        <li class="list-group-item d-flex justify-content-center">
          <button class="btn btn-primary" type="button" style="width: 25rem; height: 3rem;" onclick="deleteElement(this)">Delete</button>
        </li>
        
      </ul>
    </div>

    `;

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

    document.getElementById("pieChart").setAttribute('style', 'width:100%;max-width:700px;');
    document.getElementById("barChart").setAttribute('style', 'width:100%;max-width:700px;');
    document.getElementById("graphChart").setAttribute('style', 'width:100%;max-width:700px;');

    const xValues = ["HP", "Laptop", "AC"];
    const yValues = [17, 35, 65];
    const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797"
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
    const yValues1 = [1.241, 8.687, 37.230];
    const barColors1 = ["red", "green","blue"];

    new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues1,
        datasets: [{
        backgroundColor: barColors1,
        data: yValues1
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "Total Watt consumed (in kWh)"
        }
    }
    });

    const xValues2 = ["day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11"];
    const yValues2 = [15,14,14,11,10,9,9,8,7,5,2];

    new Chart("graphChart", {
    type: "line",
    data: {
        labels: xValues2,
        datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues2
        }]
    },
    options: {
        legend: {display: false},
        scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
        },
        title: {
            display: true,
            text: "Electricity Token Forecast"
            }
    }
    });
}