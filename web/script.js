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
            <input type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Jam Pemakian/Hari</span>
            <input type="number" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
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

    document.getElementById("myChart").setAttribute('style', 'width:100%;max-width:700px;');
    
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Wine Production 2018"
        }
      }
    });
}