$(document).ready(function(){
   
   $('li').click(function(){
     var idSelected = $(this).attr('id');
   
//   if($("."+idSelected).css('background-color') == rgb(0, 255, 0)){
//      $("."+idSelected).css("background-color","white"); 
//   }else{
       $('.card').css('background-color','white');
       $("."+idSelected).css("background-color","green");
 //  }
 
   });
   
   
    
});



///// mine workds but this will be the answer given by the codes institute

//$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
  //  var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    //var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    //$(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
//    $(thisStreamCardsSelector).addClass("card-highlight");
//});