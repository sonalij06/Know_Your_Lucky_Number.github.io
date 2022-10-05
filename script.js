'use strict';
let secret = Math.trunc(Math.random() * 100) ;
console.log(secret);

        // document.querySelector('.rando').textContent = secret;

let score = 50;
// document.querySelector('.sco').textContent =

let high_score = 0;

// console.log(Number(document.querySelector('.high').value));
document.querySelector('.check').addEventListener('click',function() {
    let inp =Number(document.querySelector('#inputNumber').value);
    console.log(inp);
    if(inp == 0)
    {
        document.querySelector('.message').textContent = 'Choose a number between 1 and 99';
    }
    else if(secret == inp)
    {
        document.querySelector('.message').textContent = 'Correct number ;))';
        document.querySelector('.rando').textContent = secret;
        document.querySelector('.check').style.visibility = "hidden";

        if(score > high_score){
            high_score = score;
            document.querySelector('.high_score').textContent = score;
        }
        document.getElementById("gameoverMenu").style.opacity = 1;
        document.getElementById("gameoverMenu").style.zIndex = 10;
        console.log(high_score);
        document.querySelector('html').style.backgroundColor= 'rgb(100, 255, 0)';
    }
    else
    {
        document.querySelector('.message').textContent = secret < inp ? 'Too High ;((' : 'Too Low ;((' ;
        score--;
        document.querySelector('.sco').textContent = score;
        if(score < 1){
          document.querySelector('.message').textContent = 'you lose :((';
          document.querySelector('.check').style.visibility = "hidden";
          document.getElementById("gameoverMenu").style.opacity = 1;
          document.getElementById("gameoverMenu").style.zIndex = 10;
        }


        }
    }
    // else if(secret < inp)
    // {
    //     document.querySelector('.message').textContent = 'Too High ;((';
    //     score--;
    //     document.querySelector('.sco').textContent = score;
    //     if(score < 1)
    //     document.querySelector('.message').textContent = 'you lose :((';

    // }
    // else if(secret > inp)
    // {
    //     document.querySelector('.message').textContent = 'Too Low ;((';
    //     score--;
    //     document.querySelector('.sco').textContent = score;
    //     if(score < 1)
    //     document.querySelector('.message').textContent = 'you lose :((';
    // }
);


document.querySelector('.again').addEventListener('click',function() {
    score = 50;
    secret = Math.trunc(Math.random() * 100) ;
    restartGame();
});

document.querySelector('.secondAgainButton').addEventListener('click',function() {
    score = 50;
    var maxRange = document.getElementById("sliderVal").value;
    secret = Math.trunc(Math.random() * maxRange + 1) ;
    document.getElementById("numRangeHeader").innerHTML = "Between " + "1 - " + maxRange;
    restartGame();
});

function restartGame(){
  document.getElementById("gameoverMenu").style.opacity = 0;
  document.getElementById("gameoverMenu").style.zIndex = -10;
  document.getElementById("paramMenu").style.opacity = 0;
  document.getElementById("paramMenu").style.zIndex = -10;
  document.querySelector('.message').textContent = 'Choose a Number...';
  document.querySelector('.sco').textContent = score;
  document.querySelector('.rando').textContent = '?';
  document.querySelector('.check').style.visibility = "visible";


  document.querySelector('.input').value = '';
  document.querySelector('html').style.backgroundColor = 'rgb(252, 252, 252)';
}

document.querySelector('.modifyParamClass').addEventListener('click',function() {
    document.getElementById("gameoverMenu").style.opacity = 0;
    document.getElementById("gameoverMenu").style.zIndex = -10;
    document.getElementById("paramMenu").style.opacity = 1;
    document.getElementById("paramMenu").style.zIndex = 10;
});
