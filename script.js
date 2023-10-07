 // circle skills
 const circles = document.querySelectorAll(".circle");

 circles.forEach(elem => {
   var dots = parseInt(elem.getAttribute("data-dots")); // Parse as an integer
   var marked = parseInt(elem.getAttribute("data-percent")); // Parse as an integer
   var percent = Math.floor((dots * marked) / 100);
   var points = "";
   var rotate = 360 / dots;
 
   for (let i = 0; i < dots; i++) {
     points += `<div class="points" style="--i:${i};--root:${rotate}deg"></div>`;
   }
   elem.innerHTML = points;
 
   const pointsMarked = elem.querySelectorAll(".points");
   for (let i = 0; i < percent; i++) {
     pointsMarked[i].classList.add('marked');
   }
 });
 
 