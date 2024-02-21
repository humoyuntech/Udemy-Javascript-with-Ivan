// let btn = $('#btn');
// console.log(btn);

//---------------------------------------------------

$(document).ready(function(){
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

   $('list-item:eq(2)').on('click', function(){
     $('.image:even').fadeToggle('slow');
   });





});









