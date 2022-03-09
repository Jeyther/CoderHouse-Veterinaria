$(() => {

    const alertas = new Alertas();

    let elementos = JSON.parse(localStorage.getItem('elementos'));
    let esEnvio = false;

    cargarElementos();

    // CARGA LA CANTIDAD DE PRODUCTOS EN EL CONTADOR DEL CARRITO
    cargarCartWidgetCount('cartWidgetCount');

    function cargarElementos() {

        if (elementos == null || elementos.length == 0) {

            $('#contenedor-productos').html(`<p>El carrito esta vacio</p>`);
            $('#vaciar-carrito').css('display', 'none');

        } else {

            for (const elemento of elementos) {

                $('#contenedor-productos').append(`
        
                <div class="carrito__contenedor__productos__elementos__elemento" id="${elemento.id}">

                    <img src="${elemento.img}" alt="comida"
                        class="carrito__contenedor__productos__elementos__elemento__img">

                    <div class="carrito__contenedor__productos__elementos__elemento__texto">
                        <p class="carrito__contenedor__productos__elementos__elemento__texto__titulo" id="nombre">${elemento.nombre}</p>
                        <p class="carrito__contenedor__productos__elementos__elemento__texto__descripcion" id="descripcion">${elemento.descripcion}</p>
                    </div>

                    <p class="carrito__contenedor__productos__elementos__elemento__cantidad" id="cantidad">x${elemento.cantidad}</p>

                    <div class="carrito__contenedor__productos__elementos__elemento__precio">
                        <p id="precio">${elemento.precio}</p>
                        <p>$</p>
                    </div>

                    <button id="eliminar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-trash3" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </button>

                </div>
        
            `);

            }

        }

        cargarPrecios();

    }

    // ASIGNAMOS EL EVENT LISTENER AL CONTENEDOR DE LOS PRODUCTOS
    $('#contenedor-productos').click((event) => {

        let target = event.target;

        while (target != this) {

            if (target.id == 'eliminar') {

                eliminarProducto(target.parentElement.id);

                alertas.deleted();

                return;

            }

            target = target.parentElement;

        }

    });

    $('.despacho').click((e) => {

        let total = parseFloat($('#total').text());
        let envio = parseInt($('#envio'));

        if (e.target.value == 'tienda') {

            if (esEnvio) {

                total -= 5;
                envio = 0;
                $('#envio').text(envio);
                esEnvio = false;

            }

        } else {

            if (!esEnvio) {

                total += 5;
                envio = 5;
                $('#envio').text(envio);
                esEnvio = true;

            }

        }

        $('#total').text(total);

    }

    );

    $('#aplicar').click(() => {

        let texto = $('#descuento-input').val();

        if (texto == 'PET20') {

            let descuento;
            let total = parseFloat($('#total').text());

            descuento = total * 0.20;
            total -= descuento

            $('#validador-descuento').html(`<p style='font-size: 12px; color: green;'>descuento aplicado</p>`);

            $('#descuento').text(descuento);
            $('#total').text(total);

        } else {

            $('#validador-descuento').html(`<p style='font-size: 12px; color: red;'>cupón no valido</p>`);

        }

    });

    $('#vaciar-carrito').click(() => {

        localStorage.clear();
        elementos = [];

        cargarElementos();
        cargarCartWidgetCount('cartWidgetCount');

        alertas.deleted();

    })

    $('#pagar').click(() => {

        if (elementos == null || elementos.length == 0) {

            alertas.error();

        } else {

            alertas.success();

        }

    })

    function cargarPrecios() {

        let subtotal = 0;
        let igv = 0;
        let total = 0;

        if (elementos == null || elementos.length == 0) {


        } else {

            for (const elemento of elementos) {

                total += Number(elemento.precio * elemento.cantidad);

            }


        }
        igv = total * 0.18;

        subtotal = total - igv;

        $('#subtotal').text(subtotal.toFixed(2));
        $('#igv').text(igv.toFixed(2));
        $('#total').text(total.toFixed(2));

    }

    function eliminarProducto(id) {

        for (let i = 0; i < elementos.length; i++) {

            if (elementos[i].id == id) {

                cambiarCartWidgetCount(elementos[i].cantidad)
                elementos.splice(i, 1);



            }

        }

        localStorage.setItem('elementos', JSON.stringify(elementos));
        $('#contenedor-productos').html('');
        cargarElementos();

    }

    function cambiarCartWidgetCount(cantidad) {

        let clave = 'cartWidgetCount';
        let valor = cantidad;

        if (!localStorage.getItem(clave)) {

            localStorage.setItem(clave, valor);

        } else {

            let dataStorage = JSON.parse(localStorage.getItem(clave));
            dataStorage -= valor;
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

});