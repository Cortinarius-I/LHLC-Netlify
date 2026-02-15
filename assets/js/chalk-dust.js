
const c=document.getElementById('chalk-dust'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;
const p=[...Array(50)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()+.3,vx:Math.random()*.1-.05,vy:Math.random()*.15+.05,o:Math.random()*.4+.2}));
(function d(){x.clearRect(0,0,c.width,c.height);
p.forEach(e=>{x.fillStyle=`rgba(245,245,242,${e.o})`;x.beginPath();x.arc(e.x,e.y,e.r,0,7);x.fill();
e.x+=e.vx;e.y+=e.vy;if(e.y>c.height)e.y=-10});requestAnimationFrame(d)})();
