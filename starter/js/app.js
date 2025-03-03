const getElement = (selector) =>{

  const element = document.querySelector(selector)
  if(element) return element
  throw Error(
    `Please double check your class name, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',() => {
  links.classList.toggle('show-links')
})

const date = document.querySelector('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
