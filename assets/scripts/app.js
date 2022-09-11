const ATTTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentmonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);
console.log('did');
function attack() {
    console.log('clicked');
    const damage = dealMonsterDamage(ATTTACK_VALUE);
    currentmonsterHealth -= damage;
}


attackBtn.addEventListener('click', attack);