const ATTTACK_VALUE = 10;
const Monster_Attack = 13;
const DOUBLE_ATTACK = 30;
const HEALTH_UP = 30;
const LOG_PLAYER_ATTACK = 'PLAYER ATTACK';
const LOG_PLAYER_STRONG_ATTACK = ' PLAYER STRONG ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER ATTACK';
const LOG_HEALED = 'PLAYER HEALED';
const LOG_GAMEOVER = 'GAMEOVER';

enteredValue = parseInt(prompt('What is the value of Monster and PLayer', 'type'));

let chosenMaxLife = enteredValue;
let currentmonsterHealth = chosenMaxLife;
let playerHealth = chosenMaxLife;
let BonusLife = true;
let battleLog = [];

adjustHealthBars(chosenMaxLife);

function showLog (ev , val , monhealth , playhealth) {
    let logEntry = {
        event : ev,
        value : val,
        monsterhealth : monhealth,
        playerhealth : playhealth 
    }
    if ( ev === LOG_PLAYER_ATTACK) {
        logEntry.target = 'Monster' 
    }
    else if ( ev === LOG_PLAYER_STRONG_ATTACK ){
        logEntry.target = "Monster"
    }
    else if ( ev === LOG_MONSTER_ATTACK){
        logEntry.target = "Player"
    }
    else if ( ev === LOG_GAMEOVER){
        logEntry.target = "GameOver"
    }
    else if (ev === LOG_HEALED){
        logEntry.target = "Healed"
    }
    battleLog.push(logEntry);
}


function Reset (){
    currentmonsterHealth = chosenMaxLife;
    playerHealth = chosenMaxLife;    
    resetGame(100);
}

function endGame () {
    const initialplayerHealth = playerHealth;
    const playerdamage = dealPlayerDamage(Monster_Attack);
    playerHealth -= playerdamage;
    showLog(
        LOG_MONSTER_ATTACK,
        playerdamage,
        playerHealth,
        currentmonsterHealth,
    );
    if (playerHealth <= 0 && BonusLife){
        BonusLife = false;
        removeBonusLife()
        playerHealth = initialplayerHealth;
        setPlayerHealth(initialplayerHealth);
        alert('Your Saved by the bonus life');
    }
    if (currentmonsterHealth <= 0 && playerHealth > 10){
        alert('Your the winner');
        showLog(
            LOG_GAMEOVER,
            'player Won',
            playerHealth,
            currentmonsterHealth,
        );
        Reset();
    } else if (playerHealth <= 0 && currentmonsterHealth < 0){
        alert('Your the Loser')
        showLog(
            LOG_GAMEOVER,
            "You Lost",
            playerHealth,
            currentmonsterHealth,
        );
        Reset();
    }
}

function Attacks (type){
    /* Using the terinary operator instead of if else in the code */

    let maxdamage = type === 'Attack' ? ATTTACK_VALUE : DOUBLE_ATTACK ;
    let logEvent = type === 'Attack' ? LOG_PLAYER_ATTACK : LOG_PLAYER_STRONG_ATTACK;
    
    /* The below if else code is same as the above terinary operator code to try both we commented it out*/


    // if (type === 'Attack'){
    //     maxdamage = ATTTACK_VALUE
    //     logEvent = LOG_PLAYER_ATTACK
    // } else {
    //     maxdamage = DOUBLE_ATTACK
    //     logEvent = LOG_PLAYER_STRONG_ATTACK
    // }
    
    const damage = dealMonsterDamage(maxdamage);
    currentmonsterHealth -= damage;
    showLog(
        logEvent,
        damage,
        playerHealth,
        currentmonsterHealth,
    );
    endGame();
}

function attack() { 
    Attacks('Attack');
}

function StrongAtck () {
    Attacks('Strong_Attack');
}

function HealMee () {
    let heal
    if (playerHealth >= chosenMaxLife){
        alert('Your healed brother')
        heal = H
    } else {
        heal = HEALTH_UP
    }
    increasePlayerHealth(heal);
    playerHealth += heal;
    endGame();
}

function log (){
    console.log(battleLog);
}

healBtn.addEventListener('click', HealMee);
strongAttackBtn.addEventListener('click', StrongAtck);
attackBtn.addEventListener('click', attack);
logBtn.addEventListener('click', log);