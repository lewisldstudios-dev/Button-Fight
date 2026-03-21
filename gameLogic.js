const player = document.getElementById('player');
const enemyElement = document.getElementById('enemy');
let heartOne = document.getElementById('healthOne');
let heartTwo = document.getElementById('healthTwo');
let heartThree = document.getElementById('healthThree');
let heartFour = document.getElementById('healthFour');
let heartFive = document.getElementById('healthFive');
let heartSix = document.getElementById('healthSix');
let heartSeven = document.getElementById('healthSeven');
let heartEight = document.getElementById('healthEight');
let heartNine = document.getElementById('healthNine');
let heartTen = document.getElementById('healthTen');
let coins = parseInt(localStorage.getItem('coins')) || 0;
let playerHealth = 10;
let heal = parseInt(localStorage.getItem('heal'));
let playerStrenght =  parseInt(localStorage.getItem('playerStrenght')) || 1;
let currentEnemy = [
    { name: 'enemyOne', health: 10},
    { name: 'enemyTwo', health: 12},
    { name: 'enemyThree', health: 12},
    { name: 'enemyFour', health: 13},
    { name: 'enemyFive', health: 12},
    { name: 'enemySix', health: 12},
    { name: 'enemySeven', health: 13},
    { name: 'enemyEight', health: 12},
    { name: 'enemyNine', health: 13},
    { name: 'boss', health: 15}
];
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;

onload = function showHealth() {
    console.log(`Enemy health: ${currentEnemy[currentLevel - 1].health}`)
    console.log(`Player health: ${playerHealth}`)
    console.log(`Heal: ${heal}`)
}

function attackEnemy() {
    currentEnemy[currentLevel - 1].health -= playerStrenght
    damage();
    enemyDamage();
}

function damage() {
    if (currentEnemy[currentLevel - 1]) {
        playerHealth--
        loseHealth();
        attackPlayer = 0;
        console.log(`enemy Health = ${currentEnemy[currentLevel -1].health}`)
    }
}

function loseHealth() {
    if (playerHealth === 9) {
        heartTen.style.backgroundColor = 'white'
        heartTen.style.color = 'white'
    } else if (playerHealth === 8) {
        heartNine.style.color = 'white';
        heartNine.style.backgroundColor = 'white'
    } else if (playerHealth === 7) {
        heartEight.style.color = 'white';
        heartEight.style.backgroundColor = 'white'
    } else if (playerHealth === 6) {
        heartSeven.style.color = 'white';
        heartSeven.style.backgroundColor = 'white'
    } else if (playerHealth === 5) {
        heartSix.style.color = 'white';
        heartSix.style.backgroundColor = 'white'
    } else if (playerHealth === 4) {
        heartFive.style.color = 'white';
        heartFive.style.backgroundColor = 'white'
    } else if (playerHealth === 3) {
        heartFour.style.color = 'white';
        heartFour.style.backgroundColor = 'white'
    } else if (playerHealth === 2) {
        heartThree.style.color = 'white'
        heartThree.style.backgroundColor = 'white'
    } else if (playerHealth === 1) {
        heartTwo.style.color = 'white';
        heartTwo.style.backgroundColor = 'white'
    } else if (playerHealth === 0) {
        heartOne.style.color = 'white';
        heartOne.style.backgroundColor = 'white'
        window.alert(`You died... ${playerHealth}`)
        console.log(`Player died! ${playerHealth}`)
        window.location.href = 'levelSelec.html'
    }
}

function gainHealth() {
    if (playerHealth === 9) {
        heartNine.style.backgroundColor = 'red'
        heartNine.style.color = 'red'
    } else if (playerHealth === 8) {
        heartEight.style.color = 'red';
        heartEight.style.backgroundColor = 'red'
    } else if (playerHealth === 7) {
        heartSeven.style.color = 'red';
        heartSeven.style.backgroundColor = 'red'
    } else if (playerHealth === 6) {
        heartSix.style.color = 'red';
        heartSix.style.backgroundColor = 'red'
    } else if (playerHealth === 5) {
        heartFive.style.color = 'red';
        heartFive.style.backgroundColor = 'red'
    } else if (playerHealth === 4) {
        heartFour.style.color = 'red';
        heartFour.style.backgroundColor = 'red'
    } else if (playerHealth === 3) {
        heartThree.style.color = 'red';
        heartThree.style.backgroundColor = 'red'
    } else if (playerHealth === 2) {
        heartTwo.style.color = 'red'
        heartTwo.style.backgroundColor = 'red'
    } else if (playerHealth === 1) {
        heartOne.style.color = 'red';
        heartOne.style.backgroundColor = 'red'
    } 
}

function healPlayer() {
    if (heal > 0) {
        playerHealth++
        heal--
        console.log(`Heals left: ${heal} Health: ${playerHealth}`)
        localStorage.setItem('heal', heal)
    } else if (playerHealth === 10) {
        window.alert(`You can't heal... ${playerHealth}`)
    } else {
        window.alert(`Failed to Heal. Heals left: ${heal} Lives: ${playerHealth}`)
    }
    gainHealth();
}

function enemyDamage() {
    if (currentEnemy[currentLevel -1].health <= 0) {
        window.alert('You killed the ememy!')
        coins += Math.floor(Math.random() * 5)
        window.location.href = 'levelSelec.html'
        currentLevel++
    }
}


localStorage.setItem('playerStrenght', playerStrenght);
localStorage.setItem('heal', heal);
localStorage.setItem('coins', coins);
localStorage.setItem('currentLevel', currentLevel);