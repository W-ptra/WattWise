const acProduct = `
<div id="ac_product" class="card m-3" style="width: 15rem; height: auto;">
                <img class="rounded mx-auto d-block" src="./Picture/Ac1.png" class="card-img-top mx-auto" alt="..." style="width: 13rem; height: 10rem;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center">AC</h5>
                    
                    <a href="#" class="btn btn-primary">Save energy up to 10%</a>
                </div>
            </div>
`;

const fanProduct = `
<div id="fan_product" class="card m-3" style="width: 15rem; height: auto;">
                <img class="rounded mx-auto d-block" src="./Picture/Fan1.jpeg" class="card-img-top mx-auto" alt="..." style="width: 13rem; height: 10rem;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center">Fan</h5>
                    
                    <a href="#" class="btn btn-primary">Save energy up to 10%</a>
                </div>
            </div>
`;

const lampProduct = `
<div id="lamp_product" class="card m-3" style="width: 15rem; height: auto;">
<img class="rounded mx-auto d-block" src="./Picture/Lamp1.jpg" class="card-img-top mx-auto" alt="..." style="width: 13rem; height: 10rem;">
<div class="card-body d-flex flex-column">
    <h5 class="card-title text-center">Lamp</h5>
    
    <a href="#" class="btn btn-primary">Save energy up to 20%</a>
</div>
</div>
`;

const gadgetProduct = `
<div id="gadget_product" class="card m-3" style="width: 15rem; height: auto;">
<img class="rounded mx-auto d-block" src="./Picture/Gadget1.jpeg" class="card-img-top mx-auto" alt="..." style="width: 13rem; height: 10rem;">
<div class="card-body d-flex flex-column">
    <h5 class="card-title text-center">Gadget</h5>
    
    <a href="#" class="btn btn-primary">Save energy 5%</a>
</div>
</div>

`;

function deleteAllProduct(){
    const selectedElement = document.getElementById("product_list");
    
    while (selectedElement.firstChild) {
        selectedElement.removeChild(selectedElement.firstChild);
    }
}

function showFanProduct(){
    
    deleteAllProduct();

    for (let i = 0; i < 10; i++) {
        document.getElementById("product_list").innerHTML += fanProduct; 
    }
    
}

function showAcProduct(){

    deleteAllProduct();

    for (let i = 0; i < 10; i++) {
        document.getElementById("product_list").innerHTML += acProduct; 
    }
    
}


function showLampProduct(){
    
    deleteAllProduct();

    for (let i = 0; i < 10; i++) {
        document.getElementById("product_list").innerHTML += lampProduct; 
    }
    
}

function showGadgetProduct(){
    
    deleteAllProduct();

    for (let i = 0; i < 10; i++) {
        document.getElementById("product_list").innerHTML += gadgetProduct; 
    }
    
}