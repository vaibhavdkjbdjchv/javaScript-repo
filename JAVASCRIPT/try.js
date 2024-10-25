// console.log(":hi");
// const mySum = [5, 2, 3];


// const myTotal = mySum.reduce((acc, currval) => {
//     console.log(`acc := ${acc} Curval:=  ${currval}`);
//     return acc + currval
// }, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js cours",
        price: 5000

    },
    {
        itemName: "puthon cours",
        price: 4000

    },
    {
        itemName: "java cours",
        price: 10000

    },
    {
        itemName: "fullstack cours",
        price: 20000

    },

]

const addAllPrices = shoppingCart.reduce((acc, item) => {
    console.log(`acc = ${acc} currantValue = ${item.price}`);
    return acc + item.price;
}, 0);
console.log(addAllPrices);