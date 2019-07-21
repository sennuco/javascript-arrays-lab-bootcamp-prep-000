//Step One: Define kittens as an array
var kittens = ["Milo", "Otis", "Garfield"];

//Step Two:Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

//Step Three: Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

//Step Four: Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

//Step Five: Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten() {
  
}
