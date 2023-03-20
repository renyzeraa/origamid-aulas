$('a').each(function (e) {
    $(this).click(function () {
        e.preventDefault
        $(this).css('background', 'red')
    })
})
