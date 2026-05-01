document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -80px 0px' // ← вот это ключевое!
    }
  )

  document.querySelectorAll('.card, .a2').forEach((el) => {
    observer.observe(el)
  })
})

// document.addEventListener('DOMContentLoaded', () => {
//   const words = document.querySelectorAll('.info-text p')

//   words.forEach((p) => {
//     const text = p.innerHTML
//     const parts = text.split(' ')
//     p.innerHTML = parts
//       .map((word) => `<span class="word">${word}</span>`)
//       .join(' ')
//   })

//   document.querySelectorAll('.word').forEach((word) => {
//     word.style.animationDelay = `${Math.random() * 2}s`
//   })

//   // сюда же перенеси свой observer код
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible')
//           observer.unobserve(entry.target)
//         }
//       })
//     },
//     {
//       threshold: 0.2,
//       rootMargin: '0px 0px -80px 0px'
//     }
//   )

//   document.querySelectorAll('.card, .a2').forEach((el) => {
//     observer.observe(el)
//   })
// })
