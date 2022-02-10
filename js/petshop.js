$(() => {

    class Articulo {
        constructor(id, nombre, cantidad, precio) {
            this.id = id;
            this.nombre = nombre;
            this.cantidad = cantidad;
            this.precio = precio;
        }
    }

    let pagina = 1;

    // INICIO ARTICULOS DEL PETSHOP
    let articulosPerro = [{
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
    let articulosGato = [{
            id: 1,
            nombre: "Comida Gato 1",
            descripcion: "esta es la comida de gato numero 1",
            cantidad: 1,
            precio: 60,
            img: "img/S3/gato/comida_gato-1.jpg"
        },
        {
            id: 2,
            nombre: "Comida Gato 2",
            descripcion: "esta es la comida de gato numero 2",
            cantidad: 1,
            precio: 100,
            img: "img/S3/gato/comida_gato-2.jpg"

        },
        {
            id: 3,
            nombre: "Comida Gato 3",
            descripcion: "esta es la comida de gato numero 3",
            cantidad: 1,
            precio: 150,
            img: "img/S3/gato/comida_gato-3.jpg"

        },
        {
            id: 4,
            nombre: "Comida Gato 4",
            descripcion: "esta es la comida de gato numero 4",
            cantidad: 1,
            precio: 80,
            img: "img/S3/gato/comida_gato-4.jpg"

        },
        {
            id: 5,
            nombre: "Comida Gato 5",
            descripcion: "esta es la comida de gato numero 5",
            cantidad: 1,
            precio: 300,
            img: "img/S3/gato/comida_gato-5.jpg"

        },
        {
            id: 6,
            nombre: "Comida Gato 6",
            descripcion: "esta es la comida de gato numero 6",
            cantidad: 1,
            precio: 750,
            img: "img/S3/gato/comida_gato-6.jpg"

        },
        {
            id: 7,
            nombre: "Comida Gato 7",
            descripcion: "esta es la comida de gato numero 7",
            cantidad: 1,
            precio: 90,
            img: "img/S3/gato/comida_gato-7.jpg"

        },
        {
            id: 8,
            nombre: "Comida Gato 8",
            descripcion: "esta es la comida de gato numero 8",
            cantidad: 1,
            precio: 210,
            img: "img/S3/gato/comida_gato-8.jpg"

        }
    ];
    let articulosAve = [{
            id: 1,
            nombre: "Comida Ave 1",
            descripcion: "esta es la comida de ave numero 1",
            cantidad: 1,
            precio: 60,
            img: "img/S3/ave/comida_ave-1.jpg"
        },
        {
            id: 2,
            nombre: "Comida Ave 2",
            descripcion: "esta es la comida de ave numero 2",
            cantidad: 1,
            precio: 100,
            img: "img/S3/ave/comida_ave-2.jpg"

        },
        {
            id: 3,
            nombre: "Comida Ave 3",
            descripcion: "esta es la comida de ave numero 3",
            cantidad: 1,
            precio: 150,
            img: "img/S3/ave/comida_ave-3.jpg"

        },
        {
            id: 4,
            nombre: "Comida Ave 4",
            descripcion: "esta es la comida de ave numero 4",
            cantidad: 1,
            precio: 80,
            img: "img/S3/ave/comida_ave-4.jpg"

        },
        {
            id: 5,
            nombre: "Comida Ave 5",
            descripcion: "esta es la comida de ave numero 5",
            cantidad: 1,
            precio: 300,
            img: "img/S3/ave/comida_ave-5.jpg"

        },
        {
            id: 6,
            nombre: "Comida Ave 6",
            descripcion: "esta es la comida de ave numero 6",
            cantidad: 1,
            precio: 750,
            img: "img/S3/ave/comida_ave-6.jpg"

        },
        {
            id: 7,
            nombre: "Comida Ave 7",
            descripcion: "esta es la comida de ave numero 7",
            cantidad: 1,
            precio: 90,
            img: "img/S3/ave/comida_ave-7.jpg"

        },
        {
            id: 8,
            nombre: "Comida Ave 8",
            descripcion: "esta es la comida de ave numero 8",
            cantidad: 1,
            precio: 210,
            img: "img/S3/ave/comida_ave-8.jpg"

        }
    ];
    // FIN ARTICULOS DEL PETSHOP

    //REALIZA UNA ITERACIÓN POR CADA ARTICULO DEPENDIENDO DEL TIPO DE ANIMAL

    const comidaPerros = () => {

        for (let i = 0; i < articulosPerro.length; i++) {

            crearArticulo(articulosPerro[i]);

        }

    }

    const comidaGatos = () => {
        for (let i = 0; i < articulosGato.length; i++) {

            crearArticulo(articulosGato[i]);

        }
    }

    const comidaAves = () => {
        for (let i = 0; i < articulosAve.length; i++) {

            crearArticulo(articulosAve[i]);

        }
    }

    const comidaTodos = () => {

        const articulosTodos = articulosPerro.concat(articulosGato, articulosAve);

        switch (pagina) {

            case 1:

                for (let i = 0; i < articulosTodos.length - 14; i++) {

                    crearArticulo(articulosTodos[i]);

                }

                break;

            case 2:

                for (let i = 10; i < articulosTodos.length - 4; i++) {

                    crearArticulo(articulosTodos[i]);

                }

                break;

            case 3:

                for (let i = 20; i < articulosTodos.length; i++) {

                    crearArticulo(articulosTodos[i]);

                }

                break;

            default:
                break;

        }


    }

    //CREACION DE ELEMENTOS EN EL DOM
    comidaTodos();

    function crearArticulo(articulo) {

        $('#contenedor-productos').append(`

            <!-- Elemento del petshop -->
            <div class="petshop__contenedor__productos__elemento">

                <a href='#'>

                    <img class="petshop__contenedor__productos__elemento__img" src="${articulo.img}" alt="comida_perro">

                    <p id="id-articulo">${articulo.id}</p>

                    <h4 class="petshop__contenedor__productos__elemento__titulo" id="nombre">${articulo.nombre}</h4>

                    <p class="petshop__contenedor__productos__elemento__descripcion">${articulo.descripcion}</p>

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

                <button class="petshop__contenedor__productos__elemento__boton" id="agregar">Agregar <img src="img/S3/cart.png" class="seccion-3__grid__elemento__boton__cart"> </button>

            </div>
    
        `);

    }

    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS
    $('#contenedor-productos').click(function (event) {

        let target = event.target;

        while (target != this) {

            if (target.id == 'agregar') {

                agregarProducto(target.parentElement);
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

    //SE PASAN A JSON TODOS CADA OBJETO SELECCIONADO PARA PODER ALMACENARLOS EN EL LOCALSTORAGE
    function pasarAJson(articulo) {

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

        // agregarAlCarrito();
    }

});