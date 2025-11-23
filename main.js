import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // card navigation
  document.querySelectorAll('button[data-link]').forEach(btn=>{
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-link');
      window.location.href = url;
    });
  });

  // simple HUD scan animation trigger
  const scan = document.querySelector('.scan-line');
  if(scan){
    let dir = 1;
    setInterval(()=> {
      const now = parseFloat(getComputedStyle(scan).top);
      if(now > 90) dir = -1;
      if(now < 5) dir = 1;
      scan.style.top = (now + dir*0.8) + '%';
    }, 30);
  }


  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');
  if(hamburger && mainNav){
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  console.log('Halo Fan Hub cargado');
});
