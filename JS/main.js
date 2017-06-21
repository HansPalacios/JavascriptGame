let targets = [[3,6],[3,5],[3,4],[3,3],[3,2]];
let targets2 = [[22,6],[22,5],[22,4],[22,3],[22,2]];
let lastPress;
let lastPress2;
let dot;
let dot2;

// face for snake 1
function face(){
  let coords = targets[0];
  document.querySelector(`tr:nth-child(${coords[0]}) td:nth-child(${coords[1]})`).classList.add('face');
};
face();
function byeface(){
  let coords = targets[1];
  document.querySelector(`tr:nth-child(${coords[0]}) td:nth-child(${coords[1]})`).classList.remove('face');
};

// face for snake 2
function face2(){
  let coords = targets2[0];
  document.querySelector(`tr:nth-child(${coords[0]}) td:nth-child(${coords[1]})`).classList.add('face2');
};
face2();
function byeface2(){
  let coords = targets2[1];
  document.querySelector(`tr:nth-child(${coords[0]}) td:nth-child(${coords[1]})`).classList.remove('face2');
};

// random dot
function addDot(type){
  document.querySelector('.'+type) && document.querySelector('.'+type).classList.remove(type);
  let coords = [Math.floor((Math.random() * 25) + 1),Math.floor((Math.random() * 25) + 1)];
  window[type] = coords;
  document.querySelector(`tr:nth-child(${coords[0]}) td:nth-child(${coords[1]})`).classList.add(type);
};


// restart game
document.getElementById("restart").addEventListener("click", function(){
location.reload();
  });




document.addEventListener("DOMContentLoaded",function(){

// music
var aud = new Audio();
aud.src = 'media/whosyourdaddy.mp3';
aud.play();

addDot('dot');
addDot('dot2');

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
        newSquare[0] = 25;
      }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
  }
  // down
    else if (lastPress.keyCode == '40') {
    newSquare[0] += 1;
     if( newSquare[0] > 25 ) {
          newSquare[0] = 1;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    console.log( removeSquare, `tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`)
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
    }
    // left
    else if (lastPress.keyCode == '37') {
    newSquare[1] -= 1;
     if( newSquare[1] <= 0 ) {
          newSquare[1] = 25;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
  }
    // right
    else  if (lastPress.keyCode == '39') {
    newSquare[1] += 1;
     if( newSquare[1] > 25 ) {
          newSquare[1] = 1;
        }
    targets.unshift(newSquare);
    let removeSquare = targets.pop();
    document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    document.querySelector(`tr:nth-child(${newSquare[0]}) td:nth-child(${newSquare[1]})`).classList.add('active');
  };
  face();
  byeface();
  plus();
  plus2();
  gameOver();
},100);

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
        newSquare2[0] = 25;
      }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
  }
  // down
    else if (lastPress2.keyCode == '83') {
    newSquare2[0] += 1;
     if( newSquare2[0] > 25 ) {
          newSquare2[0] = 1;
        }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    }
    // left>
    else if (lastPress2.keyCode == '65') {
    newSquare2[1] -= 1;
     if( newSquare2[1] <= 0 ) {
          newSquare2[1] = 25;
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
     if( newSquare2[1] > 25) {
          newSquare2[1] = 1;
        }
    targets2.unshift(newSquare2);
    let removeSquare2 = targets2.pop();
    document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
    document.querySelector(`tr:nth-child(${newSquare2[0]}) td:nth-child(${newSquare2[1]})`).classList.add('active2');
    console.log(targets2);
  };
  face2();
  byeface2();
  plus();
  plus2();
  gameOver();
},100);



function plus(){
  let firstSquare = targets[0];
  let secondSquare = targets2[0];

  if ( JSON.stringify(firstSquare) === JSON.stringify(window.dot)) {
  let newSquare = targets.slice(-1)[0];
  targets.push(newSquare);

  let removeSquare2 = targets2.pop();
  document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
  addDot('dot');
  }
  else if ( JSON.stringify(secondSquare) === JSON.stringify(window.dot)) {
  let newSquare2 = targets2.slice(-1)[0];

  targets2.push(newSquare2);
  let removeSquare = targets.pop();
  document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
    addDot('dot');
  };
};

function plus2(){
  let firstSquare = targets[0];
  let secondSquare = targets2[0];

  if ( JSON.stringify(firstSquare) === JSON.stringify(window.dot2)) {
  let newSquare = targets2.slice(-1)[0];
  targets.push(newSquare);
  let removeSquare2 = targets2.pop();
  document.querySelector(`tr:nth-child(${removeSquare2[0]}) td:nth-child(${removeSquare2[1]})`).classList.remove('active2');
  addDot('dot2');
  }
  else if ( JSON.stringify(secondSquare) === JSON.stringify(window.dot2)) {
  let newSquare2 = targets.slice(-1)[0];
  targets2.push(newSquare2);
  let removeSquare = targets.pop();
  document.querySelector(`tr:nth-child(${removeSquare[0]}) td:nth-child(${removeSquare[1]})`).classList.remove('active');
  addDot('dot2');

  };
};

function gameOver() {
  if (targets.length === 0 || targets2.length === 0){
     $("#father").animate({"width": "550px"}, 10);
     // aud.pause();
     // var aud2 = new Audio();
     // aud2.src = 'media/californialove.mp3';
     // aud2.play();
  };
};
});



