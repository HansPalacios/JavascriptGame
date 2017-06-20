const gridSize = 18;
let targets = [[2,6],[2,5],[2,4],[2,3],[2,2]];
let targets2 = [[16,6],[16,5],[16,4],[16,3],[16,2]];
let dots = [[7,6]];
let lastPress;
let lastPress2;


document.addEventListener("DOMContentLoaded",function(){

// food**********************************
dots.forEach(function(dot){
document.querySelector(`tr:nth-child(${dot[0]}) td:nth-child(${dot[1]})`).classList.add('dot');
});

// first snake**********************************************************************
  targets.forEach(function(target){
    document.querySelector(`tr:nth-child(${target[0]}) td:nth-child(${target[1]})`).classList.add('active');
  });
  
 document.onkeydown = checkKey;

 function checkKey(e) {
  e = e || window.event;
  if ([38,40,37,39].includes(e.keyCode)) {
    lastPress = e;
  } else if ([87,83,65,68].includes(e.keyCode)) {
    lastPress2 = e;
  }
 }
  var intervalId = setInterval(function(){
  let newSquare = [].concat(targets[0]);
  //   // up
  if( lastPress == undefined) return false;
  if (lastPress.keyCode == '38') {
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
    else if (lastPress.keyCode == '40') {
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
    else if (lastPress.keyCode == '37') {
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
    else  if (lastPress.keyCode == '39') {
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
  // else if( targets = dots ) {
  //  newSquare[1] += 1;
  //  targets.push(newSquare);
  // }
  plus();
},200);

// second snake**********************************************************************
targets2.forEach(function(target2){
    document.querySelector(`tr:nth-child(${target2[0]}) td:nth-child(${target2[1]})`).classList.add('active2');
  });

  var intervalId = setInterval(function(){
  let newSquare2 = [].concat(targets2[0]);
  // up
  if( lastPress2 == undefined) return false;
  if (lastPress2.keyCode == '87') {
    newSquare2[0] -= 1;
    if( newSquare2[0] <= 0) {
        newSquare2[0] = 18;
      }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    console.log(targets2);
  }
  // down
    else if (lastPress2.keyCode == '83') {
    newSquare2[0] += 1;
     if( newSquare2[0] > gridSize ) {
          newSquare2[0] = 1;
        }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    console.log(targets2);
    }
    // left>
    else if (lastPress2.keyCode == '65') {
    newSquare2[1] -= 1;
     if( newSquare2[1] <= 0 ) {
          newSquare2[1] = 18;
        }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    console.log(targets2);
  }
    // right
    else  if (lastPress2.keyCode == '68') {
    newSquare2[1] += 1;
     if( newSquare2[1] > gridSize ) {
          newSquare2[1] = 1;
        }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    console.log(targets2);
  };
  plus();
},200);



function plus(){
  let firstSquare = targets[0];
  let secondSquare = targets2[0];
  let firstDot = dots[0];

  if ( JSON.stringify(firstSquare) === JSON.stringify(firstDot)) {
  let newSquare = [];
  firstSquare.concat(newSquare);
  newSquare[1] += 1;
  targets.push(newSquare);
  let removeSquare2 = targets2.pop();
  document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
  console.log(targets)
  }
  else if ( JSON.stringify(secondSquare) === JSON.stringify(firstDot)) {
  let newSquare2 = [];
  secondSquare.concat(newSquare2);
  newSquare2[1] += 1;
  targets2.push(newSquare2);
  let removeSquare = targets.pop();
  document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
  console.log(targets2);

  };
};

});




