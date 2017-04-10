
var casita = document.getElementById("casita");
var viborita = document.getElementById("viborita");

document.addEventListener("keydown", movimiento);

// Posición Inicial
var posicionX = 200;
var posicionY = 200;

// Movimiento con flechitas del teclado
function movimiento(event){
  var flecha = event.keyCode;
  switch (flecha) {
    case 37: // Izquierda
      posicionX -= 100;
      if (posicionX < 0) {
        alert("Game Over");
        sinMovimiento();
      } else {
        viborita.style.marginLeft = posicionX + "px";
      }
      break;
      case 39: // Derecha
        posicionX += 100;
        if (posicionX > 400) {
          alert("Game Over");
          sinMovimiento();
        } else {
          viborita.style.marginLeft = posicionX + "px";
        }
        break;
    case 38: // Arriba
      posicionY -= 100;
      if (posicionY < 0) {
        alert("Game Over");
        sinMovimiento();
      } else {
        viborita.style.marginTop = posicionY + "px";
      }
      break;
    case 40: // Abajo
      posicionY += 100;
      if (posicionY > 400) {
        alert("Game Over");
        sinMovimiento();
      } else {
        viborita.style.marginTop = posicionY + "px";
      }
      break;
    default:
  }
}

function sinMovimiento(){
  document.removeEventListener("keydown", movimiento);
}
