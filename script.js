// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawRec() {
  let a = document.getElementById("canvas");
  let ctx = a.getContext("2d");
  ctx.beginPath();
  ctx.rect(100, 900, 400, 270);
  ctx.stroke();
}
drawRec();

function drawTri() {
  var b = document.getElementById("canvas");
  var ctx = b.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(100, 900);
  ctx.lineTo(300, 700);
  ctx.lineTo(500, 900)
  ctx.stroke();
}
drawTri();

function drawRec2() {
  let a = document.getElementById("canvas");
  let ctx = a.getContext("2d");
  ctx.beginPath();
  ctx.rect(1050, 900, 400, 270);
  ctx.stroke();
}
drawRec2();

function drawTri2() {
  var b = document.getElementById("canvas");
  var ctx = b.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(1050, 900);
  ctx.lineTo(1250, 700);
  ctx.lineTo(1450, 900)
  ctx.stroke();
}
drawTri2();


function drawRecTree() {
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(735, 970, 100, 200);
  ctx.fillStyle = "brown";
  ctx.fill();
}
drawRecTree();

function drawCirTree() {
  let d = document.getElementById("canvas");
  let ctx = d.getContext("2d");
  ctx.beginPath();
  ctx.ellipse(785, 870, 185, 80, Math.PI / 2, 0.7, 1.78 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "green";
  ctx.fill();

}

drawCirTree();