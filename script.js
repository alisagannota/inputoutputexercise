function hideAllFaces(names) {
    document.querySelector('#movedface1').className = "hidden";
    document.querySelector('#movedface2').className = "hidden";
    document.querySelector('#movedface3').className = "hidden";
}

function hideAllBodies() {
    document.querySelector('#movedbody1').className = "hidden";
    document.querySelector('#movedbody2').className = "hidden";
    document.querySelector('#movedbody3').className = "hidden";
}

let face1= document.querySelector('#movedface1');
let face2= document.querySelector('#movedface2');
let face3= document.querySelector('#movedface3');
let body1= document.querySelector('#movedbody1');
let body2= document.querySelector('#movedbody2');
let body3= document.querySelector('#movedbody3')


function faceFunction1() {
    hideAllFaces();
    face1.className === "hidden"
      ? (face1.className = "face")
      : (face1.className = "hidden");
}

function faceFunction2() {
    hideAllFaces();
    face2.className === "hidden"
      ? (face2.className = "face")
      : (face2.className = "hidden");
}

function faceFunction3() {
    hideAllFaces();
    face3.className === "hidden"
      ? (face3.className = "face")
      : (face3.className = "hidden");
}

function bodyFunction1() {
    hideAllBodies();
    body1.className === "hidden"
    ? (body1.className = "body")
    : (body1.className = "hidden");
}
function bodyFunction2() {
    hideAllBodies();
    body2.className === "hidden"
    ? (body2.className = "body")
    : (body2.className = "hidden");
}
function bodyFunction3() {
    hideAllBodies();
    body3.className === "hidden"
    ? (body3.className = "body")
    : (body3.className = "hidden");
}