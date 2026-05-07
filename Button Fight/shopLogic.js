const item1 = document.getElementById('itemOne');
const item2 = document.getElementById('itemTwo');
const item3 = document.getElementById('itemThree');
const item4 = document.getElementById('itemFour');

let heal = parseInt(localStorage.getItem('heal'));
let playerStrenght = parseInt(localStorage.getItem('playerStrenght'));
let coins = parseInt(localStorage.getItem('coins'));

onload = function showLogs() {
    console.log(`${playerStrenght}`)
    console.log(`${heal}`)
}

item1.onclick = function buyItemOne() {
    if (coins === 1) {
        heal++
        coins -= 1;
        localStorage.setItem('heal', heal);
    } else {
        window.alert('Not enough Coins!')
    }
}

item2.onclick = function buyItemTwo() {
    if (coins === 3) {
        playerStrenght = 2;
        coins -= 3;
        localStorage.setItem('playerStrenght', playerStrenght);
    } else if (playerHealth === 2) {
        window.alert('You already bought it!')
    } else {
        window.alert('Not enough Coins!')  
    }
}

item3.onclick = function buyItemThree() {
    if (coins === 5) {
        playerStrenght = 2;
        coins -= 5
        localStorage.setItem('playerStrenght', playerStrenght);
    } else if (playerStrenght === 2) {
        window.alert('You already bought it!')
    } else {
        window.alert('Not enough Coins!')  
    }
}

item4.onclick = function buyItemFour() {
    if (coins === 10) {
        playerStrenght = 3;
        coins -= 10;
        localStorage.setItem('playerStrenght', playerStrenght);
        console.log(`${playerStrenght}`)
    } else if (playerStrenght === 3) {
        window.alert('You already bought it!')
    } else {
        window.alert('Not enough Coins!')  
    }
}

localStorage.setItem('coins', coins);