//
//      window.onload = () => {
// var tarjeta = document.getElementById('tarjeta')
//console.log(tarjeta);
//    }
window.addEventListener('load', function () {
    var contenedor = document.getElementById('contenedor');
    var botonCrear = this.document.getElementById('crear');
    // con esto hace referencia al elemento
    // var tarjeta = document.getElementById('tarjeta');
    botonCrear.addEventListener('click', function () {
        // crear cualquier elemento
        var tarjeta = document.createElement('div');
        // agrgar un clase
        tarjeta.classList.add('tarjeta');
        // agragasr como hijo al contenedor
        contenedor.appendChild(tarjeta);
        //mostrar en consola
        //        console.log(tarjeta);
    });
});

