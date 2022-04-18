$(document).ready(function() {
setTimeout(function() {
$(".preloader").fadeOut(2000);
},3000);
});

const clickx= document.getElementById('strip');
clickx.addEventListener('click', function(){
clickx.classList.toggle('burger-strip div');
});
