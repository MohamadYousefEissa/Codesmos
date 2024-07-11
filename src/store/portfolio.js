export default {
  state() {
    return {
      currentPage: 1
    }
  },
  actions: {
    nextPage(contex) {
      const pages = document.querySelectorAll('.paper')
      const cp = contex.state.currentPage
      if (cp < pages.length + 1) {
        if (cp === 1) contex.dispatch('openBook')
        else if (cp === pages.length) contex.dispatch('closeBook', false)
        pages[cp - 1].classList.add('flipped')
        pages[cp - 1].style.zIndex = cp
        contex.state.currentPage++
        contex.commit('watchPage', contex.state.currentPage)
      }
    },
    previousPage(contex) {
      const pages = document.querySelectorAll('.paper')
      const cp = contex.state.currentPage
      if (cp > 1) {
        if (cp === 2) contex.dispatch('closeBook', true)
        else if (cp === pages.length + 1) contex.dispatch('openBook')
        pages[cp - 2].classList.remove('flipped')
        pages[cp - 2].style.zIndex = pages.length + 1 - pages[cp - 2].style.zIndex
        contex.state.currentPage--
        contex.commit('watchPage', contex.state.currentPage)
      }
    },
    openBook() {
      const book = document.querySelector('#book')
      book.style.transform = 'translateX(50%)'
    },
    closeBook(_, isFirstPage) {
      const book = document.querySelector('#book')
      book.style.transform = isFirstPage ? 'translateX(0%)' : 'translateX(100%)'
    },
    keyboardEvents(contex) {
      window.addEventListener('keyup', (ev) => {
        if (ev.key === 'ArrowRight' || ev.key.toLowerCase() === 'd') contex.dispatch('nextPage')
        else if (ev.key === 'ArrowLeft' || ev.key.toLowerCase() === 'a')
          contex.dispatch('previousPage')
      })
    },
    swipeEffect(contex) {
      const book = document.querySelector('#book')
      let touchStartX = 0
      let touchEndX = 0
      let dragStartX = 0
      let dragEndX = 0
      book.addEventListener('touchstart', (ev) => {
        touchStartX = ev.changedTouches[0].screenX
      })
      book.addEventListener('touchend', (ev) => {
        touchEndX = ev.changedTouches[0].screenX
        if (touchEndX < touchStartX) contex.dispatch('nextPage')
        if (touchEndX > touchStartX) contex.dispatch('previousPage')
      })
      book.addEventListener('dragstart', (ev) => {
        dragStartX = ev.screenX
      })

      book.addEventListener('dragend', (ev) => {
        dragEndX = ev.screenX
        if (dragEndX < dragStartX) contex.dispatch('nextPage')
        if (dragEndX > dragStartX) contex.dispatch('previousPage')
      })
    }
  },
  mutations: {
    watchPage(_, cp) {
      const nextBtn = document.querySelector('#nextBtn')
      const prevBtn = document.querySelector('#prevBtn')
      const pages = document.querySelectorAll('.paper')
      if (cp === 1) prevBtn.classList.add('d-none')
      else if (cp === pages.length + 1) nextBtn.classList.add('d-none')
      else {
        prevBtn.classList.remove('d-none')
        nextBtn.classList.remove('d-none')
      }
    }
  }
}
