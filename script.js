
//Set current year
const year = document.querySelector('.year')
const yearDate = new Date().getFullYear()
year.textContent = yearDate

// make mobile navigation work
const btnNav = document.querySelector('.btn-mobile-nav')
const bodyEl = document.querySelector('body')

btnNav.addEventListener('click', function(){
  bodyEl.classList.toggle('nav-open')
  
})
