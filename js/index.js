$(() => {

    const alertas = new Alertas();

    // TODOS LOS PRODUCTOS
    let articulos;

    // PETICION AJAX A LOS ARTICULOS DEL PETSHOP
    const URLJSON = "./js/articulos.json";

    $.getJSON(URLJSON, function (respuesta, estado) {

        if (estado === 'success') {

            articulos = respuesta;

            crearElementos();

        } else {

            console.log("hubo un error al cargar los datos del JSON.... Intente de nuevo");

        }

    });

    // CARGA LA CANTIDAD DE PRODUCTOS EN EL CONTADOR DEL CARRITO
    cargarCartWidgetCount('cartWidgetCount');

    //CREAMOS LA PEQUEÑA LISTA DE ARTICULOS EN LA PAGINA PRINCIPAL DE SITIO
    function crearElementos() {

        for (let i = 0; i < 6; i++) {

            $('#contenedor').append(`

            <!-- Elemento de la seccion-3 -->
            <div class="seccion-3__grid__elemento">

            <a href='producto.html' id='producto-seleccionado'>

                    <img class="seccion-3__grid__elemento__img" id="imagen" src="${articulos[i].img}" alt="comida_perro">

                    <p id="id-producto">${articulos[i].id}</p>

                    <h4 class="seccion-3__grid__elemento__titulo" id="nombre">${articulos[i].nombre}</h4>

                    <p class="seccion-3__grid__elemento__descripcion" id="descripcion">${articulos[i].descripcion}</p>

                </a>
                
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
    
        `);

        }

    }
    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS

    $('#contenedor').click(function (event) {

        let target = event.target;

        while (target != this) {

            if (target.id == 'agregar') {

                let articulo = crearObjeto(target.parentElement);

                cartWidgetCount(articulo.cantidad);

                almacenarEnLocalStorage('elementos', articulo);

                alertas.agregadoAlCarrito();

                return;

            }

            if (target.id == 'producto-seleccionado') {

                let articulo = crearObjeto(target.parentElement);

                almacenarEnStorageProductoSeleccionado('seleccionado', articulo);

                return;

            }

            if (target.id == 'mas' || target.id == 'menos') {

                cambiarCantidad(target);

                return;

            }

            target = target.parentElement;

        }

    })

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

    //SE CREA UN OBJETO DE LA CLASE ARTICULO PARA LUEGO PASARLO A JSON
    const crearObjeto = target => {

        let producto;

        for (const articulo of articulos) {

            if (articulo.id == target.querySelector("#id-producto").textContent) {

                producto = {

                    id: articulo.id,
                    nombre: articulo.nombre,
                    descripcion: articulo.descripcion,
                    cantidad: parseInt(target.querySelector("#cantidad").value),
                    precio: articulo.precio,
                    img: articulo.img

                };

            }

        }

        return producto;

    }


    const cartWidgetCount = (cantidad) => {

        const clave = 'cartWidgetCount';
        const valor = cantidad;

        if (!localStorage.getItem(clave)) {

            localStorage.setItem(clave, valor);

        } else {

            let dataStorage = JSON.parse(localStorage.getItem(clave));
            dataStorage += valor;
            localStorage.setItem(clave, dataStorage);

        }

        cargarCartWidgetCount(clave);

    }

    function cargarCartWidgetCount(clave) {

        if (!localStorage.getItem(clave)) {

            localStorage.setItem(clave, 0);

        } else {

            $('#cartWidget-Counter').html(`${localStorage.getItem(clave)}`)

        }

    };

    function almacenarEnLocalStorage(clave, valor) {
        /*
    EN ESTA CONDICION, ESTAMOS DICIENDO: 
    "SI NO EXISTE LA VARIABLE DE localStorage clave"
    REALIZAREMOS LO SIGUIENTE
   */

        let elementos;

        elementos = obtenerProductosLocalStorage();

        if (elementos.length === 0) {

            elementos.push(valor);

        } else {

            let yaExiste = false;

            for (const elemento of elementos) {

                if (elemento.id === valor.id) {

                    elemento.cantidad += valor.cantidad;

                    yaExiste = true;

                }

            }

            if (!yaExiste) elementos.push(valor);

        }

        localStorage.setItem(clave, JSON.stringify(elementos));

    }


    /* Funcion para almanecar SOLO 1 producto, para utilizarlo luego en la vista de producto.html */
    function almacenarEnStorageProductoSeleccionado(clave, valor) {


        if (localStorage.getItem(clave)) {

            //ELIMINO EL OBJETO DEL LOCALSTORAGE SI YA EXISTIA
            localStorage.removeItem(clave);

        }
        //AGREGAMOS EL OBJETO AL LOCALSTORAGE
        localStorage.setItem(clave, JSON.stringify(valor));

    }

    function obtenerProductosLocalStorage() {

        let elementos;

        if (localStorage.getItem('elementos') === null) {

            elementos = [];

        } else {

            elementos = JSON.parse(localStorage.getItem('elementos'));

        }

        return elementos;

    }

})


//SUPUESTAMENTE PARA VER DONDE ESTA EL SCROLL 
/* window.addEventListener('scroll',()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos){
        showProgress();
    } else{
        hideProgress();
    }
} */