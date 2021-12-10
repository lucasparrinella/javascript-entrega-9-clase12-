$( () => {console.log("DOM Cargado correctamente.")} );

let listaProductos = [
    {prenda: "Remera", talle: "S/M/L", estado: "En stock", precio: "$1500"},
    {prenda: "Pantalón", talle: "S/M/L", estado: "En stock", precio: "$2000"},
    {prenda: "Gorra", talle: "S/M/L", estado: "En stock", precio: "$1000"}
]
let opcionesMenu;
while (opcionesMenu !== 3) {

function listarProductos(lista) {
    for (let i = 0; i < lista.length; i++) {
            console.table(lista[i]);
    }
}

    const menu = `Elegí una opción:
    1 - Ver productos
    2 - Calcular precio final
    3 - Salir`
    opcionesMenu = Number(prompt(menu));

    // Validación
    if(!isNaN(opcionesMenu) && opcionesMenu < 3 && opcionesMenu > 0) {
        switch (opcionesMenu) {
            case 1:
                listarProductos(listaProductos);
                break;
            case 2:
                const prendaUsuario = Number(prompt(`Elegí de que prenda te gustaria saber el precio final con IVA agregado:
                1 - Remera: $1500 
                2 - Pantalón: $2000 
                3 - Gorra: $1000`));

                if (prendaUsuario == 1) {
                    const precioFinal = (a, b, c) => {return 1500 * 0.21 + 1500};
                    alert(`El precio final de esa prenda es de $ ${precioFinal()}`);
                } else if (prendaUsuario == 2) {
                    const precioFinal = (a, b, c) => {return 2000 * 0.21 + 2000};
                    alert(`El precio final de esa prenda es de $ ${precioFinal()}`);
                } else if (prendaUsuario == 3) {
                    const precioFinal = (a, b, c) => {return 1000 * 0.21 + 1000};
                    alert(`El precio final de esa prenda es de $ ${precioFinal()}`);
                } else {
                    alert("¡El número ingresado no es válido!");
                }
                break;
            default:
                break;        
        }
    } else if (opcionesMenu == 3) {
        alert("Cierra este mensaje para ver tu despedida en el HTML");

        // Luego de cerrar el cartel se muestra el mensaje de despedida en el HTML
        let div = document.querySelector("#despedida");
        div.innerHTML = `<h2 class="mensajeDespedida">Hasta luego, <strong>¡ADIOS!</strong></h2>
                         <img src="./images/homero.jpg" class="homero" alt="Imagen homero despidiendose">`;

    } else {
        alert("La opción ingresada es incorrecta")
    }
}

//let btn = document.querySelector("#btnPrecioFinal");

//btn.addEventListener("click", functionBtn);
//
//function functionBtn(){
//    let div = document.querySelector("#preciosFinales");
//    div.innerHTML = `<h3>1 - Remera: $1815 <br> 2 - Pantalón: $2420 <br> 3 - Gorra: $1210</h3>`;
//}

//jQuery event listener / Arrow function

$("#btnPrecioFinal").click( () => {let div = document.querySelector("#preciosFinales"); div.innerHTML = `<h3>1 - Remera: $1815 <br> 2 - Pantalón: $2420 <br> 3 - Gorra: $1210</h3>`;});




