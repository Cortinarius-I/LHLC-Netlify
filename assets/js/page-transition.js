
document.querySelectorAll('a[href]').forEach(l=>{
const u=l.getAttribute('href');
if(!u||u.startsWith('http')||u.startsWith('#'))return;
l.onclick=e=>{e.preventDefault();document.body.classList.add('is-leaving');setTimeout(()=>location.href=u,300);};
});
