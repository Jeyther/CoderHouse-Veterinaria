$(() => {

    const alertas = new Alertas();

    let pagina = 1;

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

        //CREACION DE ELEMENTOS EN EL DOM
        comidaTodos();

    });

    //REALIZA UNA ITERACIÓN POR CADA ARTICULO DEPENDIENDO DEL TIPO DE ANIMAL
    const comidaPerros = () => {

        for (const articulo of articulos) {

            if (articulo.tipo === 'perro') {

                crearArticulo(articulo);

            }

        }

    }

    const comidaGatos = () => {

        for (const articulo of articulos) {

            if (articulo.tipo === 'gato') {

                crearArticulo(articulo);

            }

        }
    }

    const comidaAves = () => {

        for (const articulo of articulos) {

            if (articulo.tipo === 'ave') {

                crearArticulo(articulo);

            }

        }
    }

    const comidaTodos = () => {

        switch (pagina) {

            case 1:

                for (let i = 0; i < articulos.length - 14; i++) {

                    crearArticulo(articulos[i]);

                }

                break;

            case 2:

                for (let i = 10; i < articulos.length - 4; i++) {

                    crearArticulo(articulos[i]);

                }

                break;

            case 3:

                for (let i = 20; i < articulos.length; i++) {

                    crearArticulo(articulos[i]);

                }

                break;

            default:
                break;

        }


    }

    // CARGA LA CANTIDAD DE PRODUCTOS EN EL CONTADOR DEL CARRITO
    cargarCartWidgetCount('cartWidgetCount');

    function crearArticulo(articulo) {

        $('#contenedor-productos').append(`

            <!-- Elemento del petshop -->
            <div class="petshop__contenedor__productos__elemento">

                <a href='producto.html' id='producto-seleccionado'>

                    <img class="petshop__contenedor__productos__elemento__img" src="${articulo.img}" alt="${articulo.nombre}">

                    <p id="id-producto">${articulo.id}</p>

                    <h4 class="petshop__contenedor__productos__elemento__titulo" id="nombre">${articulo.nombre}</h4>

                    <p class="petshop__contenedor__productos__elemento__descripcion" id="descripcion">${articulo.descripcion}</p>

                </a>

                <div>

                    <div class="petshop__contenedor__productos__elemento__cantidad">
                        <button id="menos">-</button>
                        <input class="petshop__contenedor__productos__elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                        min="1" value="1">
                        <button id="mas">+</button>
                    </div>

                    <div>
                        <p class="petshop__contenedor__productos__elemento__precio" id="precio">${articulo.precio}</p>
                        <p>$</p>
                    </div>

                </div>

                <button class="petshop__contenedor__productos__elemento__boton" id="agregar">Agregar<img src="img/S3/cart.png" class="petshop__contenedor__productos__elemento__boton__cart"> </button>

            </div>
    
        `);

    }

    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS
    $('#contenedor-productos').click(function (event) {

        let target = event.target;

        while (target != this) {

            if (target.id == 'agregar') {

                let articulo = crearObjeto(target.parentElement);

                cartWidgetCount(articulo.cantidad);

                almacenarEnLocalStorage('elementos', articulo);

                alertas.added();

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


    });

    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LAS CATEGORIAS
    $('#categorias').click(function (event) {

        let target = event.target;

        if (target.id != 'categorias') {

            $('#perros').removeClass('seleccionado');
            $('#gatos').removeClass('seleccionado');
            $('#aves').removeClass('seleccionado');
            $('#todos').removeClass('seleccionado');

            if (!$('#page_1').hasClass('seleccionado')) {

                $('#page_1').toggleClass('seleccionado');
                $('#page_2').removeClass('seleccionado');
                $('#page_3').removeClass('seleccionado');

                pagina = 1;

            }

            $('#contenedor-productos').html('');

        }

        while (target != this) {

            switch (target.id) {

                case 'perros':

                    $('#perros').toggleClass("seleccionado");

                    comidaPerros();

                    return;

                case 'gatos':

                    $('#gatos').toggleClass("seleccionado");

                    comidaGatos();

                    return;

                case 'aves':

                    $('#aves').toggleClass("seleccionado");

                    comidaAves();

                    return;

                case 'todos':

                    $('#todos').toggleClass("seleccionado");

                    comidaTodos();

                    return;

                default:
                    break;
            }

            target = target.parentElement;

        }

    });

    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS
    $('#paginacion').click(function (event) {

        let target = event.target;

        if ($('#todos').hasClass('seleccionado')) {


            if (target.id != 'paginacion') {

                $('#page_1').removeClass('seleccionado');
                $('#page_2').removeClass('seleccionado');
                $('#page_3').removeClass('seleccionado');

                $('#contenedor-productos').html('');

            }

            while (target != this) {

                switch (target.id) {

                    case 'page_1':

                        $('#page_1').toggleClass("seleccionado");

                        pagina = 1;

                        comidaTodos();

                        return;

                    case 'page_2':

                        $('#page_2').toggleClass("seleccionado");

                        pagina = 2;

                        comidaTodos();

                        return;

                    case 'page_3':

                        $('#page_3').toggleClass("seleccionado");

                        pagina = 3;

                        comidaTodos();

                        return;

                    default:
                        break;
                }

                target = target.parentElement;

            }

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
            $('#cartWidget-Counter').html('0');


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

});