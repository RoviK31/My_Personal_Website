
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

//smooth scrolling
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(link =>{
  link.addEventListener('click', function(e){
    e.preventDefault()
    const href = link.getAttribute('href')

    // scroll back to top
    if(href === "#"){
      window.scrollTo({
        top:0,
        behavior: "smooth"
      })
    }
 //scroll to other links
 if(href !== '#' && href.startsWith("#")){
  const sectionEL = document.querySelector(href)
  sectionEL.scrollIntoView({behavior: "smooth"})
}

// close mobile navigation
if(link.classList.contains('main-nav-link')){
  bodyEl.classList.toggle('nav-open')
  
}
 
  })
})



// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();