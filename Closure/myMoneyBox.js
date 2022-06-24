/*function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log("MoneyBox $"+ saveCoins);
    
}

moneyBox(100);
moneyBox(200); */
function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins
        console.log("MoneyBox: $"+ saveCoins);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(100);
myMoneyBox(200);
myMoneyBox(100);
myMoneyBox(200);

console.log("Ana");
const moneyBoxAna = moneyBox();
moneyBoxAna(10);  
moneyBoxAna(10);
moneyBoxAna(15);