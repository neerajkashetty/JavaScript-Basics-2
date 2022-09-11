const ATTTACK_VALUE = 10;
const Monster_Attack = 13;
const DOUBLE_ATTACK = 30;
const HEALTH_UP = 30;

let chosenMaxLife = 100;
let currentmonsterHealth = chosenMaxLife;
let playerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endGame () {
    const playerdamage = dealPlayerDamage(Monster_Attack);
    playerHealth -= playerdamage;
    if (currentmonsterHealth <= 0 && playerHealth > 10){
        alert('Your the winner');
    } else if (playerHealth <= 0 && currentmonsterHealth < 0){
        alert('Your the Loser')
    }
}

function Attacks (type){
    let maxdamage;
    if (type === 'Attack'){
        maxdamage = ATTTACK_VALUE
    } else {
        maxdamage = DOUBLE_ATTACK
    }
    const damage = dealMonsterDamage(maxdamage);
    currentmonsterHealth -= damage;
    endGame();
}

function attack() { 
    Attacks('Attack');
}

function StrongAtck () {
    Attacks('Strong_Attack');
}

function HealMee () {
    increasePlayerHealth(HEALTH_UP);
    playerHealth += HEALTH_UP;
    endGame();
}

healBtn.addEventListener('click', HealMee);
strongAttackBtn.addEventListener('click', StrongAtck);
attackBtn.addEventListener('click', attack);