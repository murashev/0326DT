// burger
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './src/images/icons/nav-close.svg';
    console.log('click')
  } else {
    navBtnImg.src = './src/images/icons/nav-open.svg';
    console.log('click')
  }
}
nav.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './src/images/icons/nav-close.svg';
    console.log('click')
  } else {
    navBtnImg.src = './src/images/icons/nav-open.svg';
    console.log('click')
  }
}

