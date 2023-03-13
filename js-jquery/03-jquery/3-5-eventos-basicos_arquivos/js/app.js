//target
/*
$('a').click(function () {
    //mesma funcao com addeventlistener
    $('.abrir-modal').text('Clicou')
})
*/

//target                               oEv (evento jQuery)
$('.abrir-modal').on('click', function (oEv) {
    //mesma funcao com addeventlistener
    $('a').text('Clicadooo')

    //com este oEv, possui varios atributos da pagina
    //e eventos com jquery
    oEv.preventDefault()
})

// passar com mouse / scroll / resize
$('p').on('mouseleave', function () {
    //mesma funcao com addeventlistener
    $('.abrir-modal').text('Mouse leave')
})
