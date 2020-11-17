document.getElementById("enter_buttn").style = "display: none;"
document.getElementById("start").style = "width: 200px;"
document.getElementById("user_input").style = "display: none;"
var start = document.getElementById("start").onclick = function(){
start.innerHTML = "restart";
document.getElementById("enter_buttn").style = "display: block;"
document.getElementById("user_input").style = "display: block;"
// document.getElementById("start").style = "display: none;"


var number = Math.floor(Math.random() * 100)
console.log(number);
var chances= 10;

var randon_num= 100;

document.getElementById("chances").innerHTML = "chances: " + chances;

document.getElementById("enter_buttn").onclick = function(){
    console.log("Hello");
    var user_input = document.getElementById("user_input").value;
    console.log(user_input);

    if(user_input > randon_num) {
        document.getElementById("usertext").innerHTML = "INVALID"
        document.getElementById("usertext").style = "background-color: red;"
        
        alert("INVALID")
    }else if(user_input == number) {
        document.getElementById("usertext").innerHTML = "You Win"
        document.getElementById("usertext").style= "color: green;"
        document.getElementById("usertext").style= "font-size: 50px;"
        document.getElementById("div2").style= "background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),  url(./images/congrat.jpg)"
        document.getElementById("user_input").style= "display: none;"
        document.getElementById("chances").style= "display: none;"
        document.getElementById("enter_buttn").style= "display: none;"
        document.getElementById("start").innerHTML = "RESTART"
        
            
            
        


        
    
    }else if(user_input > number){
        chances --;
        document.getElementById("chances").innerHTML = "chances: " + chances
        document.getElementById("usertext").innerHTML = "Your guess is high!"
        document.getElementById("usertext").style= "color: red;"
        console.log(user_input);
    }else if(user_input < number){
        chances --;
        document.getElementById("chances").innerHTML = "chances: " + chances
        document.getElementById("usertext").innerHTML = "Your guess is low!"
        document.getElementById("usertext").style= "color: orange;"

    }
    if(chances == 0){
        document.getElementById("usertext").innerHTML = "GAME OVER!"
        document.getElementById("usertext").style= "color: red;"
        document.getElementById("user_input").style= "display: none;"
        document.getElementById("chances").style= "display: none;"
        document.getElementById("enter_buttn").style= "display: none;"
        document.getElementById("start").onclick = function(){
            start;
            document.getElementById("user_input").style = "display: block;"
            document.getElementById("enter_buttn").style = "display: block;"
            document.getElementById("chances").style = "display: block;"
            document.getElementById("usertext").style = "display: none;"
            

            
        }
    
        
    }


}
}


   