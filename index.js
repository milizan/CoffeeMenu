const coffeeMenu = require("./coffee_data");

//Print an array of all the drinks on the menu.
const printName = (drink) => {
    return drink.name;
}
console.log(coffeeMenu.map(printName));

//Print an array of drinks that cost 5 and under.
const underFive = (drink) => {
    return drink.price <= 5;
}
const drinksUnderFive = coffeeMenu.filter(underFive);
console.table(drinksUnderFive);

//Print an array of drinks that are priced at an even number.
const evenPriced = (drink) => {
    return drink.price % 2 == 0;
}
const evenDrinks = coffeeMenu.filter(evenPriced);
console.table(evenDrinks);

//Print the total if you were to order one of every drink.
const prices = (item) => {
    return item.price;  
}
const priceArray = coffeeMenu.map(prices);
console.log(priceArray);

const sum = (accumulator, currentValue) => {
    return accumulator + currentValue;
};
const totalPrice = priceArray.reduce(sum);
console.log(totalPrice);

//Print an array with all the drinks that are seasonal.
const seasonal = (drink) => {
    return drink.seasonal == true;
}
const season = coffeeMenu.filter(seasonal);
console.table(season);

//Print all the seasonal drinks with the words "with imported beans"
// after the item name. For example: "affogato with imported beans".
const drinkName = (drink) => {
    return drink.name + ' with imported beans';
}
console.log(season.map(drinkName));
