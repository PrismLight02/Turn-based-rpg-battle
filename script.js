let bossHp = document.getElementById("bossHp");
let playerHp = document.getElementById("hP");
let playerTp = document.getElementById("tP");
let playerSp = document.getElementById("sP");
let attack = document.getElementById("attackBtn");
let ult = document.getElementById("ultBtn");
let buff = document.getElementById("buffBtn");
let heal = document.getElementById("healBtn");
let buffActive = false;
let defStance = false;
let buffDuration = 0;




attack.addEventListener("click", () => {
        if(bossHp.value<0)
            alert("Boss is vanquished");
        playerTp.value += 25;
        if(!buffActive)
            bossHp.value -= 50;
        else{
            bossHp.value -= 75;
            buffDuration--;
        }
        checkBossStatus();
        reportUserMove(attack.name);
        bossTurn();
})



ult.addEventListener("click", ()=>{
    if(playerTp.value>= 70){
        playerTp.value -= 70;
        playerHp.value +=100;
        if(!buffActive)
            bossHp.value -=80;
        else{
            bossHp.value -= 120;
            buffDuration--;
        }
        checkBossStatus();
        reportUserMove(ult.name);
        bossTurn();
    }
    
    else{
        alert('Lack the sufficient amount of TP');
    }
})

buff.addEventListener("click", ()=>{
    buffActive= true;
    playerSp.value -= 30;
    buffDuration =3;
    reportUserMove(buff.name);
    bossTurn();
})

heal.addEventListener("click",()=>{
    playerHp.value +=75;
    reportUserMove(heal.name);
    bossTurn();
})

function checkBossStatus(){
    if(bossHp.value<=0)
        alert("boss has been vanquished");
}

function checkPlayerStatus(){
    if(playerHp.value<=0)
        alert("You died, try again");
}

function buffTimer(){
    if(buffTimer<=0)
        buffActive= false;
}

function reportUserMove(move){
    alert(`User used ${move}`);
}

function bossTurn(){
    let turnNum = Math.floor(Math.random()*4);
    if(turnNum ===0){
        alert("Boss used Earth rending strike");
        playerHp.value -=23;
        playerTp.value += 5;
    }
    if(turnNum ===1){
        alert("Boss used thousand sword slash");
        playerHp.value -=40;
        playerTp.value +=8;
    }
    if(turnNum ===2){
        alert("Boss used plum blossom technique");
        playerSp.value -= 10;
        playerTp.value +=0;
    }
    if(turnNum ===3){
        alert("Boss used heavenly slash");
        playerHp.value-= 65;
        playerTp.value +=15;
    }
    checkPlayerStatus();
}

