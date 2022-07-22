document.addEventListener('DOMContentLoaded', () => {
  let carrosel_1 = document.getElementById('carrosel_1')
  let carrosel_2 = document.getElementById('carrosel_2')
  let carrosel_3 = document.getElementById('carrosel_3')
  let carrosel_4 = document.getElementById('carrosel_4')

  carrosel_1.classList.add('show-carrosel')

  carrosel_1.addEventListener('transitionend', () => {
    setTimeout(() => {
      carrosel_1.classList.remove('show-carrosel')
      carrosel_1.classList.add('hide-carrosel')
      carrosel_2.classList.add('show-carrosel')
    }, 4000)
  })

  carrosel_2.addEventListener('transitionend', () => {
    setTimeout(() => {
      carrosel_2.classList.remove('show-carrosel')
      carrosel_2.classList.add('hide-carrosel')
      carrosel_3.classList.add('show-carrosel')
    }, 4000)
  })

  carrosel_3.addEventListener('transitionend', () => {
    setTimeout(() => {
      carrosel_3.classList.remove('show-carrosel')
      carrosel_3.classList.add('hide-carrosel')
      carrosel_4.classList.add('show-carrosel')
    }, 4000)
  })

  carrosel_4.addEventListener('transitionend', () => {
    setTimeout(() => {
      carrosel_4.classList.remove('show-carrosel')
      carrosel_4.classList.add('hide-carrosel')
      carrosel_1.classList.add('show-carrosel')
    }, 4000)
  })
})
