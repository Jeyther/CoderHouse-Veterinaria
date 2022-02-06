class Articulo {
    constructor(id, nombre, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// VACIADO DEL LOCAL STORAGE
localStorage.clear();

// ARRAY CON LOS PRODUCTOS DE LA TIENDA
let articulos = [{
        id: 1,
        nombre: "Comida Perro 1",
        descripcion: "esta es la comida de perro numero 1",
        cantidad: 1,
        precio: 60,
        img: "img/S3/perro/comida_perro-1.jpg"
    },
    {
        id: 2,
        nombre: "Comida Perro 2",
        descripcion: "esta es la comida de perro numero 2",
        cantidad: 1,
        precio: 100,
        img: "img/S3/perro/comida_perro-2.jpg"

    },
    {
        id: 3,
        nombre: "Comida Perro 3",
        descripcion: "esta es la comida de perro numero 3",
        cantidad: 1,
        precio: 150,
        img: "img/S3/perro/comida_perro-3.jpg"

    },
    {
        id: 4,
        nombre: "Comida Perro 4",
        descripcion: "esta es la comida de perro numero 4",
        cantidad: 1,
        precio: 80,
        img: "img/S3/perro/comida_perro-4.jpg"

    },
    {
        id: 5,
        nombre: "Comida Perro 5",
        descripcion: "esta es la comida de perro numero 5",
        cantidad: 1,
        precio: 300,
        img: "img/S3/perro/comida_perro-5.jpg"

    },
    {
        id: 6,
        nombre: "Comida Perro 6",
        descripcion: "esta es la comida de perro numero 6",
        cantidad: 1,
        precio: 750,
        img: "img/S3/perro/comida_perro-6.jpg"

    },
    {
        id: 7,
        nombre: "Comida Perro 7",
        descripcion: "esta es la comida de perro numero 7",
        cantidad: 1,
        precio: 90,
        img: "img/S3/perro/comida_perro-7.jpg"

    },
    {
        id: 8,
        nombre: "Comida Perro 8",
        descripcion: "esta es la comida de perro numero 8",
        cantidad: 1,
        precio: 210,
        img: "img/S3/perro/comida_perro-8.jpg"

    }
];

// CREAR LOS PRODUCTOS EN EL HTML
/* for (const articulo of articulos) {

    document.getElementById('contenedor').innerHTML += `

    <!-- Elemento de la seccion-3 -->
    <div class="seccion-3__grid__elemento">

        <img class="seccion-3__grid__elemento__img" src="${articulo.img}" alt="comida_perro">

        <p id="id-articulo">${articulo.id}</p>

        <h4 class="seccion-3__grid__elemento__titulo" id="nombre">${articulo.nombre}</h4>

        <p class="seccion-3__grid__elemento__descripcion">${articulo.descripcion}</p>

        
        <div>
            <div class="seccion-3__grid__elemento__cantidad">
            <button id="menos">-</button>
            <input class="seccion-3__grid__elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
            min="1" value="1">
            <button id="mas">+</button>
            </div>
            <div>
                <p class="seccion-3__grid__elemento__precio" id="precio">${articulo.precio}</p>
                <p>$</p>
            </div>
        </div>
        <button class="seccion-3__grid__elemento__boton" id="agregar">Agregar <img src="img/S3/cart.png" class="seccion-3__grid__elemento__boton__cart"> </button>
    </div>
    
    `;

} */



for (let i = 0; i < articulos.length-2; i++) {

    document.getElementById('contenedor').innerHTML += `

    <!-- Elemento de la seccion-3 -->
    <div class="seccion-3__grid__elemento">

        <img class="seccion-3__grid__elemento__img" src="${articulos[i].img}" alt="comida_perro">

        <p id="id-articulo">${articulos[i].id}</p>

        <h4 class="seccion-3__grid__elemento__titulo" id="nombre">${articulos[i].nombre}</h4>

        <p class="seccion-3__grid__elemento__descripcion">${articulos[i].descripcion}</p>

        
        <div>
            <div class="seccion-3__grid__elemento__cantidad">
            <button id="menos">-</button>
            <input class="seccion-3__grid__elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
            min="1" value="1">
            <button id="mas">+</button>
            </div>
            <div>
                <p class="seccion-3__grid__elemento__precio" id="precio">${articulos[i].precio}</p>
                <p>$</p>
            </div>
        </div>
        <button class="seccion-3__grid__elemento__boton" id="agregar">Agregar <img src="img/S3/cart.png" class="seccion-3__grid__elemento__boton__cart"> </button>
    </div>
    
    `;

}

// ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS
let elementos = document.getElementById('contenedor');

let boton;

elementos.onclick = function (event) {

    let target = event.target;

    while (target != this) {

        if (target.id == 'agregar') {

            agregarProducto(target.parentElement);

        }

        if (target.id == 'mas' || target.id == 'menos') {

            cambiarCantidad(target);

        }

        target = target.parentElement;

    }

}

const cambiarCantidad = target => {

    let valor = parseInt(target.parentElement.querySelector("#cantidad").value);


    if (target.id == 'mas') {

        valor += 1;
        target.parentElement.querySelector("#cantidad").value = valor;

    } else if (valor > 1) {

        valor -= 1;
        target.parentElement.querySelector("#cantidad").value = valor;

    }

}

const agregarProducto = target => {

    pasarAJson(
        new Articulo(
            target.querySelector("#id-articulo").textContent,
            target.querySelector("#nombre").textContent,
            parseInt(target.querySelector("#cantidad").value),
            parseFloat(target.querySelector("#precio").textContent)
        )
    );

}

function pasarAJson(articulo) {
    //SE PASAN A JSON TODOS LOS OBJETOS PARA PODER ALMACENARLOS EN EL LOCALSTORAGE
    let json = JSON.stringify(articulo);


    almacenarEnStorage(articulo.id, json);
}

function almacenarEnStorage(clave, valor) {
    /*
    EN ESTA CONDICION, ESTAMOS DICIENDO: 
    "SI NO EXISTE LA VARIABLE DE localStorage clave"
    REALIZAREMOS LO SIGUIENTE
   */

    if (!localStorage.getItem(clave)) {
        //AGREGAMOS EL OBJETO AL LOCALSTORAGE
        localStorage.setItem(clave, valor);
    } else {
        // SI YA EXISTIA ENTONCES LA OBTENEMOS Y GUARDAMOS EN UNA VARIABLE
        let dataStorage = JSON.parse(localStorage.getItem(clave));
        //MODIFICAMOS SOLO LA CANTIDAD
        dataStorage.cantidad = dataStorage.cantidad + JSON.parse(valor).cantidad;
        //SOBREESCRIBIMOS LA VARIABLE de localStorage
        localStorage.setItem(clave, JSON.stringify(dataStorage));
    }

    agregarAlCarrito();
}

function agregarAlCarrito() {

    var precioTotal = 0;

    // ASIGNO EL ELMENTO A UNA VARIABLE
    let carrito = document.getElementById("carrito");

    // VACIO EL HTML DEL CARRITO ANTES DE AGREGAR LOS ELEMENTOS
    carrito.innerHTML = "";

    //CREA LA CABECERA DEL CARRITO DE ARTICULOS
    carrito.innerHTML += `
        <div>
            <h5>Nombre</h5>
            <h5>Cantidad</h5>
            <h5>Precio</h5>
        </div>
            `;

    // RECORRE TODO EL CONTENIDO DEL LOCALSTORAGE ATRAVES DE SU KEY
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);

        //USADO PARA ALMACENAR EL OBJETO GUARDADO EN EL LOCALSTORAGE
        const elemento = JSON.parse(localStorage.getItem(clave));

        // SE CREA UN DIV PARA ALMACENAR LOS ELEMENTOS DEL CARRITO
        const container = document.createElement("div");
        container.classList.add("carrito__articulo");

        container.innerHTML = `
            <p class="carrito__articulo__nombre" id="${elemento.id}">${elemento.nombre
            }</p>
            <p class="carrito__articulo__cantidad">${elemento.cantidad}</p>
            <p class="carrito__articulo__precio">${elemento.precio * elemento.cantidad
            } $</p>
        `;

        //SUMA EL PRECIO TOTAL DE TODOS LOS ARTICULOS
        precioTotal += elemento.precio * elemento.cantidad;

        document.getElementById("carrito").appendChild(container);
    }

    const total = document.createElement("div");
    total.className = "total";
    total.innerHTML = `
                <h5>Total:</h5>
                <p>${precioTotal}$</p>
            `;

    document.getElementById("carrito").appendChild(total);
}