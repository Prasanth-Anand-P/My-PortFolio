// $(document).ready(function(){

//   $('#menu').click(function(){
//     $(this).toggleClass('fa-times');
//     $('header').toggleClass('toggle');
//   });

//   $(window).on('scroll load',function(){

//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

//     if($(window).scrollTop() > 0){
//       $('.top').show();
//     }else{
//       $('.top').hide();
//     }

//   });


// });

const tg = document.getElementById("menu");
const nav = document.querySelector("header");

tg.addEventListener('click',()=>{
	nav.classList.toggle('toggle');
})