$(() => {

    //Obtenemos el producto unico que fue seleccionado del LocalStorage
    let productoSeleccionado = JSON.parse(localStorage.getItem('seleccionado'));
    let productosRecomendados = [];

    // CARGA LA CANTIDAD DE PRODUCTOS EN EL CONTADOR DEL CARRITO
    cargarCartWidgetCount('cartWidgetCount');

    // TODOS LOS PRODUCTOS
    let articulos;
    // PETICION AJAX A LOS ARTICULOS DEL PETSHOP
    const URLJSON = "./js/articulos.json";

    $.getJSON(URLJSON, function (respuesta, estado) {

        if (estado === 'success') {

            articulos = respuesta;

        } else {

            console.log("hubo un error al cargar los datos del JSON.... Intente de nuevo");

        }

        obtenerDatosProducto(articulos);
        obtenerRecomendados(articulos);
        cargarProducto();
        cargarRecomendados();

    });
    // FIN PETICION AJAX A LOS ARTICULOS DEL PETSHOP

    function obtenerDatosProducto(datos) {

        for (const dato of datos) {

            if (dato.nombre == productoSeleccionado.nombre) {

                productoSeleccionado = dato;

            }


        }

    }

    function cargarProducto() {

        $('#contenedor-producto').html(`
        
            <img class="producto__contenedor__img" src=${productoSeleccionado.img} alt="${productoSeleccionado.nombre}">

            <div class="producto__contenedor__datos" >
            
                <h1 class="producto__contenedor__datos__titulo" id='nombre'> ${productoSeleccionado.nombre}</h1>

                <p id='id-producto'>${productoSeleccionado.id}</p>

                <div>
                
                    <p class="producto__contenedor__datos__descripcion"> ${productoSeleccionado.descripcion}</p>

                    <div>

                        <div class="producto__contenedor__datos__cantidad">
                            <button id="menos">-</button>
                            <input class="producto__contenedor__datos__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                            min="1" value="1">
                            <button id="mas">+</button>
                        </div>

                        <div>
                            <p class="producto__contenedor__datos__precio" id="precio">${productoSeleccionado.precio}</p>
                            <p>$</p>
                        </div>

                    </div>
                
                </div>

                <button class="producto__contenedor__datos__boton" id="agregar">Agregar <img src="img/S3/cart.png" class="producto__contenedor__datos__boton__cart"> </button>

            </div>
        
        `);

    }

    //Aqui obtengo 4 productos al azar
    function obtenerRecomendados(datos) {


        let numerosRandom = [];

        let x = 0;

        //creo un for para limitar a solo 4 numeros
        for (let i = 0; i < 4; i++) {

            //estos metodos de Math crean numeros aleatorios entre el 1 y el 24 (tamaño del JSON de productos)
            numerosRandom.push(Math.floor((Math.random() * (24)) + 1));

        }

        while (x < numerosRandom.length) {

            for (const dato of datos) {

                if (dato.id == numerosRandom[x]) {

                    productosRecomendados.push(dato);

                    x++;

                }

            }

        }

    }

    function cargarRecomendados() {

        for (const recomendado of productosRecomendados) {

            $('#contenedor-recomendados').append(`

                <div class="producto__recomendados__contenedor__elemento">

                    <a id='producto-seleccionado' href='producto.html'>

                        <img class="producto__recomendados__contenedor__elemento__img" src="${recomendado.img}" alt="${recomendado.nombre}">

                        <p id="id-producto">${recomendado.id}</p>

                        <h4 class="producto__recomendados__contenedor__elemento__titulo" id="nombre">${recomendado.nombre}</h4>

                        <p class="producto__recomendados__contenedor__elemento__descripcion">${recomendado.descripcion}</p>

                    </a>

                    <div>

                        <div class="producto__recomendados__contenedor__elemento__cantidad">
                            <button id="menos">-</button>
                            <input class="producto__recomendados__contenedor__elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                            min="1" value="1">
                            <button id="mas">+</button>
                        </div>

                        <div>
                            <p class="producto__recomendados__contenedor__elemento__precio" id="precio">${recomendado.precio}</p>
                            <p>$</p>
                        </div>

                    </div>

                    <button class="producto__recomendados__contenedor__elemento__boton" id="agregar">Agregar <img src="img/S3/cart.png" class="producto__recomendados__contenedor__elemento__boton__cart"> </button>

                </div>

            `);

        }

    }

    $('#contenedor-producto').click(function (event) {

        let target = event.target;

        while (target != this) {

            if (target.id == 'agregar') {

                let articulo = crearObjeto(target.parentElement.parentElement);

                cartWidgetCount(articulo.cantidad);

                almacenarEnStorage('elementos', articulo);

                return;

            }

            if (target.id == 'producto-seleccionado') {

                let articulo = crearObjeto(target.parentElement);

                almacenarEnStorageProductoSeleccionado('seleccionado', articulo);

            }

            if (target.id == 'mas' || target.id == 'menos') {

                cambiarCantidad(target);

                return;

            }

            target = target.parentElement;

        }

    });

    $('#recomendados-producto').click(function (event) {

        let target = event.target;

        while (target != this) {

            if (target.id == 'agregar') {

                let articulo = crearObjeto(target.parentElement);

                cartWidgetCount(articulo.cantidad);

                almacenarEnStorage('elementos', articulo);

                return;

            }

            if (target.id == 'mas' || target.id == 'menos') {

                cambiarCantidad(target);

                return;

            }

            if (target.id == 'producto-seleccionado') {

                let articulo = crearObjeto(target.parentElement);

                almacenarEnStorageProductoSeleccionado('seleccionado', articulo);

            }

            target = target.parentElement;

        }

    });

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

    function almacenarEnStorage(clave, valor) {
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

});