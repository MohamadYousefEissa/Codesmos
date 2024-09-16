export default {
  state() {
    return {
      currentPage: 1
    }
  },
  actions: {
    nextPage(context) {
      const pages = document.querySelectorAll('.paper')
      const cp = context.state.currentPage
      if (cp < pages.length + 1) {
        if (cp === 1) context.dispatch('openBook')
        else if (cp === pages.length) context.dispatch('closeBook', false)
        pages[cp - 1].classList.add('flipped')
        pages[cp - 1].style.zIndex = cp
        context.state.currentPage++
        context.commit('watchPage', context.state.currentPage)
      }
    },
    previousPage(context) {
      const pages = document.querySelectorAll('.paper')
      const cp = context.state.currentPage
      if (cp > 1) {
        if (cp === 2) context.dispatch('closeBook', true)
        else if (cp === pages.length + 1) context.dispatch('openBook')
        pages[cp - 2].classList.remove('flipped')
        pages[cp - 2].style.zIndex = pages.length + 1 - pages[cp - 2].style.zIndex
        context.state.currentPage--
        context.commit('watchPage', context.state.currentPage)
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
    keyboardEvents(context) {
      window.addEventListener('keyup', (ev) => {
        if (ev.key === 'ArrowRight' || ev.key.toLowerCase() === 'd') context.dispatch('nextPage')
        else if (ev.key === 'ArrowLeft' || ev.key.toLowerCase() === 'a')
          context.dispatch('previousPage')
      })
    },
    swipeEffect(context) {
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
        if (touchEndX < touchStartX) context.dispatch('nextPage')
        if (touchEndX > touchStartX) context.dispatch('previousPage')
      })
      book.addEventListener('dragstart', (ev) => {
        dragStartX = ev.screenX
      })

      book.addEventListener('dragend', (ev) => {
        dragEndX = ev.screenX
        if (dragEndX < dragStartX) context.dispatch('nextPage')
        if (dragEndX > dragStartX) context.dispatch('previousPage')
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
