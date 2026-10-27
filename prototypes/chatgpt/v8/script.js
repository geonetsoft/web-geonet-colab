'use strict';
(function(){
  document.querySelectorAll('[data-card]').forEach(function(card){
    var open=card.querySelector('[data-open]');
    var close=card.querySelector('[data-close]');
    var panel=card.querySelector('.card-curtain');
    if(!open||!close||!panel)return;
    open.addEventListener('click',function(){panel.hidden=false;open.setAttribute('aria-expanded','true');close.focus({preventScroll:true});});
    close.addEventListener('click',function(){panel.hidden=true;open.setAttribute('aria-expanded','false');open.focus({preventScroll:true});});
    card.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){e.preventDefault();panel.hidden=true;open.setAttribute('aria-expanded','false');open.focus({preventScroll:true});}});
  });
})();
