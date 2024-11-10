import '/assets/sass/main.scss'
// import './assets/fonts/inter/Inter-VariableFont_slnt,wght-subset.woff2'

const siteNav = document.querySelector('#primary-navigation')
const siteNavToggle = document.querySelector('.site-nav-toggle')

siteNavToggle.addEventListener('click', () => {
   const visibility = siteNav.getAttribute('data-visible')

   if (visibility === 'false') {
      siteNav.setAttribute('data-visible', true)
      siteNavToggle.setAttribute('aria-expanded', true)
      siteNavToggle.classList.remove('bars-icon')
      siteNavToggle.classList.add('xmark-icon')
   } else {
      siteNav.setAttribute('data-visible', false)
      siteNavToggle.setAttribute('aria-expanded', false)
      siteNavToggle.classList.remove('xmark-icon')
      siteNavToggle.classList.add('bars-icon')
   }
})
