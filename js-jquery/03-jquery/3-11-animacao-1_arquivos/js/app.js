$('.abrir-modal').click(function () {
    $('.modal')
        .animate(
            {
                borderTopWidth: 200,
                borderBottomWidth: 200
            },
            500,
            'linear'
        )
        .animate(
            {
                height: 800
            },
            2000
        )
})
