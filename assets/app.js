
// Shared JS (animations for falling currency, simple UX helpers)
(function(){
  // Create falling currency objects
  const bg = document.getElementById('bg-anim');
  function rand(min,max){return Math.random()*(max-min)+min}
  const symbols = ['₱','$'];
  const count = 20;
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className='coin';
    el.style.left = (Math.random()*100) + 'vw';
    el.style.top = (Math.random()*-20) + 'vh';
    el.style.opacity = 0.6 + Math.random()*0.4;
    el.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    const s = document.createElement('span');
    s.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    // style variations
    s.style.fontSize = (12 + Math.floor(Math.random()*16)) + 'px';
    s.style.color = (Math.random()>0.85)?'#ffd700':'rgba(255,255,255,0.9)'; // gold accent occasionally
    el.appendChild(s);
    bg.appendChild(el);
    // animate
    const dur = rand(8,20);
    el.animate([
      { transform: 'translateY(-10vh) rotate(0deg)', opacity: el.style.opacity },
      { transform: 'translateY(110vh) rotate(360deg)', opacity: 0.1 }
    ], { duration: dur*1000, iterations: Infinity, delay: rand(0,5000) });
  }
})();
