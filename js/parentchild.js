$(document).ready(function(){
   $('p').click(function(){
       $('a').css('background-color','white')
       $(this).children('a').css('background-color','yellow')
   }); 
});