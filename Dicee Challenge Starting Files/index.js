var randomNumberPlayer1=6;
var randomNumberPlayer1=6;

const navEntries = performance.getEntriesByType('navigation')[0];

if (navEntries.type === 'reload') 
{
    randomNumberPlayer1= Math.floor((Math.random()*6)+1);
    randomNumberPlayer2= Math.floor((Math.random()*6)+1);
    document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumberPlayer1+".png");  
    document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumberPlayer2+".png");

    if(randomNumberPlayer1===randomNumberPlayer2)
    {
            document.querySelector("h1").innerHTML="Draw!"
    }
    else if(randomNumberPlayer1>randomNumberPlayer2)
        {
            document.querySelector("h1").innerHTML="🚩Player 1 Won"
        }
        else
        {
            document.querySelector("h1").innerHTML="Player 2 Won🚩"
        }
        
}
    
    



