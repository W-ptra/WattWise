export function wattTotal(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

const testing = [3,5,1,7,9,10];
console.log(wattTotal(testing));