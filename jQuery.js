var playing=false;
var score;
var trialsLeft;
var step;
var action;
$(function(){
    $("#startreset").click(function(){
        // click on start reset button  
        if(playing== true){
        // are we playing?
            location.reload();
    // yes,reload page
        }
        else{
           playing=true; 
            score=0;
            $("#scoreValue").html(score); 
            $("#trialsLeft").show(); //apeare trial box
            trialsLeft=3;
            addHearts();
            startAction();
            slicing();
    
            $("#startreset").html("Reset Game"); //change button text to reset game 
            $("#score").show(); //appear score
            $("#gameover").hide();


        }
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  //function 
     function stopAction(){clearInterval(action);} 

    //to slice fruit
     function slicing(){
    $("#fruit1").mouseover(function(){
        score++;
        $("#scoreValue").html(score);
$("#sound")[0].play();
    
    
    //to stop the sliced fruit
    $("#fruit1").fadeOut(200);
   //startAction(); // to send a new fruit
      setTimeout(startAction,1000);
    });
};
    
    function addHearts(){
        $("#trialsLeft").empty();
       for(i=0; i<trialsLeft;i++){
                $("#trialsLeft").append('<img src="images/heart.png" class="life">');
            } 
        
        
    }
    // start showing fruits 
    function startAction(){
        
        $("#fruit1").show();
        chooseFruit();
        
  
    }
    
    //to choose random fruit 
    function chooseFruit(){ 
        var x = Math.floor(Math.random()*4);
       $("#fruit1").attr('src','images/'+x+'.png');
        
        $("#fruit1").css({
          'left': Math.floor(Math.random()*700),
           'top': -50
          });
        


        

         
             //generate random step 
           step= 1+Math.round(1.5*Math.random());
           // move fruit down by step
   
        action = setInterval(function(){
            
            $("#fruit1").css('top',$("#fruit1").position().top + step);
     //check if the fruit is too low 
        if($("#fruit1").position().top >$("#fruitContainer").height()){
           //check trials numbers 
            if(trialsLeft >1){
                $("#fruit1").show();
             
               $("#fruit1").css({
          'left': Math.floor(Math.random()*700),
           'top': -50
          });
        //generate random step 
       step= 1+Math.round(1.5*Math.random());  
              //reduce number of trials 
                trialsLeft --;
                //populate trials left
                addHearts();
                
            }
            else { 
                playing = false;
                $("#startreset").html("start Game");
                $("#gameover").show();
             $("#gameover").html("<p> Game Over!</p> <br /> <p> your score is  "+ score+"</p>");
                $("#trialsLeft").hide();
           stopAction();
           
           }
        }
        
        
        
        },10);
                
    };
    
    
    
});















   
   // 1.create fruits ,define random step and  move them down by one step every 30sec

      //check if fruit too low ? 
        //no -> repeat no 2 
         //yes -> any trials left ? 
                 //    yes : repeat
                //  NO : show Game over 





// slice a frui 
   // play a sound 
    // increase score by 1 and explode code 