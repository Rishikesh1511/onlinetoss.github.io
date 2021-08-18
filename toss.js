
function toss()
{
  var audio = new Audio('Coin toss sound.mp3');
    audio.play();

    document.getElementById('headTail').innerHTML='Toss';

  document.getElementById('coin').animate([
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' },
     { transform: 'scaleY(0)' },
     { transform: 'scaleY(1)' }
     ],

    {
      duration: 1000
    }); 

   setTimeout(HT, 1000);

}
function HT(){  
    x = Math.floor(Math.random()*2);
    
    if(x)
    {
       document.getElementById('headTail').innerHTML='HEAD';
    }
    else
    {
      document.getElementById('headTail').innerHTML='TAIL';
    }
    
}