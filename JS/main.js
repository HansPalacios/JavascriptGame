const gridSize = 18;
let targets = [[4,4],[4,3],[4,2]];


document.addEventListener("DOMContentLoaded",function(){

  targets.forEach(function(target){
    document.querySelector(`tr:nth-child(${target[0]}) td:nth-child(${target[1]})`).classList.add('active');
  });

 document.onkeydown = checkKey;

 function checkKey(e) {
  e = e || window.event;
  var intervalId = setInterval(function(){
  let newSquare = [].concat(targets[0]);
  //   // up
  if (e.keyCode == '38') {
    newSquare[0] -= 1;
    if( newSquare[0] <= 0) {
        newSquare[0] = 18;
      }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
    console.log(targets);
  }
  // down
    else if (e.keyCode == '40') {
    newSquare[1].break;
    newSquare[0] += 1;
     if( newSquare[0] > gridSize ) {
          newSquare[0] = 1;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
    console.log(targets);
    }
    // left
    else if (e.keyCode == '37') {
    newSquare[1] -= 1;
     if( newSquare[1] <= 0 ) {
          newSquare[1] = 18;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
    console.log(targets);
  }
    // right
    else  if (e.keyCode == '39') {
    newSquare[0].break;
    newSquare[1] += 1;
     if( newSquare[1] > gridSize ) {
          newSquare[1] = 1;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
    console.log(targets);
  }
},200);
    }
});