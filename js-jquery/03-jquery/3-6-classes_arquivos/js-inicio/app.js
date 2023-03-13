// adiciona e remove classe do target
$('.abrir-modal').on('click', function (oEv) {
    $('.modal').toggleClass('active')
})

//se tem esta classe
$('.abrir-modal').on('click', function (oEv) {
    if ($('div').hasClass('modal')) {
        console.log('tem esta classe')
    }
})
