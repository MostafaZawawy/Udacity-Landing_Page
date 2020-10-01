/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 * 
*/

const sections=document.getElementsByTagName('section');
const list = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// select active secction
function setActive () {
  window.addEventListener('scroll', function (event) {
    let section
    section = getActive();
    section.classList.add('your-active-class');

    for (let sec of sections) {
      if (sec.id != section.id & sec.classList.contains('your-active-class')) {
        sec.classList.remove('your-active-class');

      }
    }

  });

}
// inactive other sections

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function menuMaking(){
  for(let section of sections) {
    let navListitem = document.createElement('li');

    navListitem.className='nav-list-item';
    navListitem.dataset.nav=section.id;
    navListitem.innerText=section.dataset.nav;
     //section.get

    list.appendChild(navListitem);
  }
}

// Add class 'active' to section when near top of viewport
function getActive() {
  let activeSection = sections[0];
  let minVal = window.innerHeight;
  for (let section of sections) {
    let bounding = section.getBoundingClientRect();
    if (bounding.top > -300 & bounding.top < minVal) {
      minVal = bounding.top;
      activeSection = section;
    }
  }
  return activeSection;
}


// Scroll to anchor ID using scrollTO event
function scrollToClick() {
  list.addEventListener('click', function (event) {
    const clicked = document.querySelector('#' + event.target.dataset.nav)

    if(clicked===null )
    alert('please click on a section ^_^');
    else
    clicked.scrollIntoView({behavior:'smooth'});
  });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
menuMaking();
// Scroll to section on link click
scrollToClick();
// Set sections as active
setActive();








