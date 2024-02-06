$(window).scroll(() => {
  const scrollTop = $(window).scrollTop()
  console.log(scrollTop)
})

$('.btn').click(e => {
  e.preventDefault()
  $(window).scrollTop(0)
})

$('.modal').removeClass('active')
$('.abrir-modal').click(function () {
  $('.modal').toggleClass('active')
  if ($('.modal').hasClass('active')) {
    $(this).text('Fechar Modal')
  } else {
    $(this).text('Abrir Modal')
  }
})
