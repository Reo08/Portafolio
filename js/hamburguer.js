const d = document

const $btn_hamburguer = d.querySelector('.hamburger')

const $nav = d.querySelector('nav ul')


$btn_hamburguer.addEventListener('click', e=> {
   $btn_hamburguer.classList.toggle('is-active')
   $nav.classList.toggle('is-active')
})

d.addEventListener( 'click', e=> {
   if(e.target.matches('nav ul a')){
      $btn_hamburguer.classList.toggle('is-active')
      $nav.classList.toggle('is-active')
   }
})
