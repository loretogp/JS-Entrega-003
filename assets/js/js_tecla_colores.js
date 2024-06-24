let color_bloque = "white";
document.addEventListener ("keydown", function (event) {
    if (event.key === "a"){
        color_bloque = "pink";
    }else if (event.key === "s"){
        color_bloque = "orange";
    }else if (event.key === "d"){
        color_bloque = "aquamarine";
    }
    caja_1.style.backgroundColor = color_bloque;

    if (event.key === "q") {
        agregaCaja("blueviolet");
    } else if ( event.key === "w") {
        agregaCaja("gray");
    } else if (event.key === "e") {
        agregaCaja("brown");
    }
});

function agregaCaja(color) {
    const otraCaja = document.createElement("div");
    otraCaja.className = "nueva_caja";
    otraCaja.style.backgroundColor = color;
    const parent = document.getElementById('otros_cuadrados');
    parent.appendChild(otraCaja);
  }