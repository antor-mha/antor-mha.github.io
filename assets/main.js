(function(){
  var m=document.getElementById('mail'),b=document.getElementById('go');
  if(m&&b){b.addEventListener('click',function(){
    var on=m.classList.toggle('on');
    b.setAttribute('aria-expanded',on);
    b.textContent=on?'Reset':'Analyze this email';
  });}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
