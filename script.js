window.onload = function() {
   var light = document.querySelector('#light');
   var btn = document.getElementById('btn');
   var btnstop = document.getElementById('btnstop');
   
   btn.addEventListener('click', lighton);
   function lighton() {
       btn.innerHTML = 'Light';
       light.style.background = '#fff';
       light.style.boxShadow= '0 90px 60px 130px #cfcfcf';
   }
   btnstop.addEventListener('click', lightstop);
   function lightstop() {
       btn.innerHTML = 'On';
       light.style.background = '#cfcfcf';
       light.style.boxShadow= 'none';
   }
   
}
