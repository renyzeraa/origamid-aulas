const menuTab = document.querySelectorAll('.js-tabmenu li')
const contentTab = document.querySelectorAll('.js-tabcontent section')
if (menuTab.length && contentTab.length) {
  contentTab[0].classList.add('ativo')

  function activeTab(index) {
    contentTab.forEach(section => {
      section.classList.remove('ativo')
    })
    contentTab[index].classList.add('ativo')
  }

  menuTab.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
}
