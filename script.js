'use strict';
let secret = Math.trunc(Math.random() * 100) ;
console.log(secret);

        // document.querySelector('.rando').textContent = secret;

let score = 50;
// document.querySelector('.sco').textContent =

let high_score = 0;

// console.log(Number(document.querySelector('.high').value));
document.querySelector('.check').addEventListener('click',function() {
    let inp =Number(document.querySelector('input').value);
    console.log(inp);
    if(inp == 0)
    {
        document.querySelector('.message').textContent = 'Choose...';
    }
    else if(secret == inp)
    {
        document.querySelector('.message').textContent = 'Correct number ;))';
        document.querySelector('.rando').textContent = secret;
        document.querySelector('.check').style.visibility = "hidden";
        if(score > high_score) {
          document.querySelector('.high_score').textContent = score;
          document.querySelector('html').style.backgroundColor= 'rgb(100, 255, 0)';
        }
        document.getElementById("gameoverMenu").style.opacity = 1;
        document.getElementById("gameoverMenu").style.zIndex = 10;
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
});


document.querySelector('.again').addEventListener('click',function() {
    score = 50;
     secret = Math.trunc(Math.random() * 100) ;

    document.getElementById("gameoverMenu").style.opacity = 0;
    document.getElementById("gameoverMenu").style.zIndex = -10;
    document.querySelector('.message').textContent = 'Choose a Number...';
    document.querySelector('.sco').textContent = score;
    document.querySelector('.rando').textContent = '?';
    document.querySelector('.check').style.visibility = "visible";


    document.querySelector('.input').value = '';
    document.querySelector('html').style.backgroundColor = 'rgb(252, 252, 252)';

});
