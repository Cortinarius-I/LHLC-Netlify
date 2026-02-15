
const m=document.querySelector('.hero-media');
if(m&&!matchMedia('(prefers-reduced-motion: reduce)').matches)
addEventListener('scroll',()=>m.style.transform=`translateY(${scrollY*.15}px)`);
