function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}


let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];


let testQuality = function(level) {
  let fuelLevelMax;
  if (level > 100000) {
    fuelLevelMax = level - 100001;
    return fuelLevelMax;
  } else if (level > 50000) {
    fuelLevelMax = level - 50001;
    return fuelLevelMax;
  } else {
    return fuelLevelMax;
  }  
}

let inventoryCargo = function(cH) {
  let goodies = ["satellite", "gold"];
  let allMine = [];

  for (i = 0; i <= cH.length; i++) {
    if (goodies.includes(cH[i])) {
      allMine.push(cH[i]);
      cH.splice(i,1,"radio");
    }
  } return allMine;
}

function irs () {
let myGoodies = inventoryCargo(cargoHold);

console.log(`Raided ${testQuality(fuelLevel)}kg of fuel from the tanks, and stole ${myGoodies[0]} and ${myGoodies[1]} from the cargo hold.`);

}

irs()
console.log(cargoHold);
