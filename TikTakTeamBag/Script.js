var cirklesTurn= false;
var turnCounter =0;
var whostarts = "cross";
$(function() {
    
    
    setInterval(function() {
       
        
        if(turnCounter>0){
            $(".progress-bar").attr({
                "aria-valuenow" : $(".progress-bar").attr("aria-valuenow") - 1,
            });

            $(".progress-bar").css({
                "width" : ($(".progress-bar").attr("aria-valuenow") / $(".progress-bar").attr("aria-valuemax") * 100) + "%"
            });

            if($(".progress-bar").attr("aria-valuenow") <= 0) {

                turnCounter-=1;

                newTurn();

            }
        }
    }, 1000);
    
    
    
    $("#gamePiece").draggable({  });
    setPiece();
    $('.GameSquare').droppable({
        drop: function( event, ui ) {
          
            if(setSquare($(this))){
                $('#gamePiece  .extraSquare').css({
            
                    opacity: "0"
            
                });
                
                
                
              
                checkForVictory($(this).index());
                
               
                   if(turnCounter == 8){
                    $("#baner a").append(" <h1>TIE-TALITY</h1> ");
                    
                    turnCounter=0;
                    
                    
                }
                else if( !checkForVictory($(this).index())){
                
                newTurn();}
               
                
                
            }
        }
    });
   
    
    
});




$("#SetTurnLengthButton").click(function(){

    if($("#SetTurnLengthInput").val() > 0){
    
        $(".progress-bar").attr({
            "aria-valuemax" : $("#SetTurnLengthInput").val(),
            "aria-valuenow" : $("#SetTurnLengthInput").val()
        });
        
        $(".progress-bar").css({
            "width" : "100%"
        });
    
    }

});



$('.resetBut').click(function(){
    
    resetGame();
    
    newTurn();
    
});


$('#circleStart').click(function(){

    whostarts = "circle";

});


$('#crossStart').click(function(){

    whostarts = "cross";

});

$('#randomStart').click(function(){

    whostarts = "random";

});



var newTurn = function(){

    turnCounter+=1;
    
    cirklesTurn = !cirklesTurn;
                
    setTimeout(function() {
        
        $('#gamePiece').remove();


        $("#GameBoard").after('<div id="gamePiece" ><div class="GameSquare"><div class="extraSquare"></div><div class="extraSquare"></div></div></div>');

        setPiece();

        $("#gamePiece").draggable({  });
        
    }, 500);
    
    $(".progress-bar").attr({
        "aria-valuenow" : $(".progress-bar").attr("aria-valuemax") ,
    });

    $(".progress-bar").css({
        "width" : "100%"
    });

}







var setPiece = function(){
    setSquare($('#gamePiece .GameSquare'));
   if(cirklesTurn  ){
        $('#gamePiece').css({
                 top: "calc(70% + 25px)"

        });
   }
}







var setSquare = function( square){
  
    if(!square.hasClass("click1") && !square.hasClass("click2")){
        
        if(cirklesTurn  ){
            
             
            
            square.toggleClass("click1");
            return true;
        }

        else {
           square.toggleClass("click2");
            return true;
        }
       
       
    }
    return false;
};







var checkForVictory = function(changedSquareIndex){

    var checkForClass;
    
    if(cirklesTurn){
    
        checkForClass = "click1";
        
    }else{
    
        checkForClass = "click2";
        
    }
    
    if(($("#GameBoard .GameSquare").eq(changedSquareIndex % 3).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(changedSquareIndex % 3 + 3).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(changedSquareIndex % 3 + 6).hasClass(checkForClass))
        ||
        ($("#GameBoard .GameSquare").eq(Math.floor(changedSquareIndex  / 3) * 3).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(Math.floor(changedSquareIndex  / 3) * 3 + 1).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(Math.floor(changedSquareIndex  / 3) * 3 + 2).hasClass(checkForClass))
        ||
        ($("#GameBoard .GameSquare").eq(0).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(4).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(8).hasClass(checkForClass))
        ||
        ($("#GameBoard .GameSquare").eq(2).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(4).hasClass(checkForClass)
        && $("#GameBoard .GameSquare").eq(6).hasClass(checkForClass))){
        if(cirklesTurn){
             $("#baner a").empty();
            $("#baner a").append(" <h1>Fatality</h1> <h1>Circle WINS<h1>");
            
        }else{
             $("#baner a").empty();
            $("#baner a").append(" <h1>Fatality</h1> <h1>Cross WINS<h1>");
            
        }
        turnCounter=0;
        //resetGame();
        return true;
    }
    return false;
 
};








var resetGame = function(){
    $("#baner a").empty();
    $('.GameSquare').removeClass("click1").removeClass("click2");
    
    turnCounter = -1;
    
    if(whostarts=="cross"){
        
        cirklesTurn = true;
        return;
        
    }
    if(whostarts=="circle"){
        
        cirklesTurn = false;
        return;
        
    }
    
    if(Math.random() > 0.5) {
        cirklesTurn = true;
    }else{
        cirklesTurn = false;
    }
    
};






$("#stanStyle").click(function(){
    $('body').toggleClass("stanStyle");



});

$("#leeStyle").click(function(){
    $('body').toggleClass("leeStyle");



});

$("#gangnamStyle").click(function(){
    $('body').toggleClass("gangnamStyle");



});
