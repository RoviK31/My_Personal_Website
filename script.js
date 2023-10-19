
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

// Sticky navigation
const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];

  
  if(!ent.isIntersecting){
    document.body.classList.add("sticky")
  }

  if(ent.isIntersecting){
    document.body.classList.remove("sticky")
  }

},
{
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})
obs.observe(sectionHeroEl)

// Reveal section
const allSections = document.querySelectorAll('.section')


const reavealSection = function(entries, observer){
  const [entry] = entries
  // console.log(entry);
  if(!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(reavealSection, {
  root:null,
  threshold: 0.15,

})
allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})


// Scrolling animation to icons
const tech_section = document.querySelectorAll('.icon')
console.log(tech_section);

const techObserver = new IntersectionObserver(function(entries){
 entries.forEach(entry=>{
   
     if(entry.isIntersecting){
        entry.target.classList.add('show')
     }else{
      entry.target.classList.remove('show')
     }

 })

},{
  root:null,
  threshold:0,
})
tech_section.forEach(icon=>{
  techObserver.observe(icon)
})

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]')
// console.log(imgTargets);

const loadImg = function(entries, observer){
  const [entry] = entries
  console.log(entry);

  if(!entry.isIntersecting) return
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold: 0,
  rootMargin: '100px'
})

imgTargets.forEach(img=> imgObserver.observe(img))

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
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();