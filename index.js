// add solution here
function theBeatlesPlay(musicians,instruments){
  let array = [];
  for(let m = 0; m <= 3; m++){
    array.push(musicians[m] + " plays " + instruments[m]);
  }return array;
}

function johnLennonFacts(facts){
  let array=[];
  let i = facts.length;
  while (i>=0){
    i--;
  array.unshift(facts[i] + "!!!");
 }return array;
}

function iLoveTheBeatles(n){
  
}