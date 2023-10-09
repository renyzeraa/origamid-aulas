function navTab() {
  const menuTab = document.querySelectorAll('.js-tabmenu li')
  const contentTab = document.querySelectorAll('.js-tabcontent section')
  const classActive = 'ativo'
  if (menuTab.length && contentTab.length) {
    contentTab[0].classList.add(classActive)

    function activeTab(index) {
      contentTab.forEach(section => {
        section.classList.remove(classActive)
      })
      contentTab[index].classList.add(classActive)
    }

    menuTab.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
navTab()

function initTitleList() {
  const titleList = document.querySelectorAll('.js-accordion dt')
  const classActive = 'ativo'
  if (titleList.length) {
    titleList[0].classList.add(classActive)
    titleList[0].nextElementSibling.classList.add(classActive)

    function activeList() {
      this.classList.toggle(classActive)
      this.nextElementSibling.classList.toggle(classActive)
    }

    titleList.forEach(item => {
      item.addEventListener('click', activeList)
    })
  }
}
initTitleList()

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()
