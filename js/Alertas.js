class Alertas {

    added() {

        const Toast = Swal.mixin({

            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true

        })

        Toast.fire({

            icon: 'success',
            title: 'producto agregado correctamente'

        })

    }

    error() {

        Swal.fire(

            'Error',
            'Primero debes agregar productos al carrito',
            'error'

        )

    }

    success() {

        Swal.fire(

            'Muy Bien',
            'Tus productos han sido comprados exitosamente',
            'success'

        )

    }

    deleted() {

        const Toast = Swal.mixin({

            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true

        })

        Toast.fire({

            icon: 'success',
            title: 'producto eliminado correctamente'

        })
    }

}