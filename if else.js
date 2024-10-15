const a = 2
if (a == 1 ? console.log("yes") : console.log("no"));


// object 

const user1 = {
    a: 0

}






if (Object.keys(user1).length === 0) {
    console.log("this object is empty");
}
else {
    console.log("not an empty object");
}


// Nullish coalescing oprator (??): null undefined 

let val1;
val1 = null ?? 2;
val2 = 5 ?? 6;

console.log(`two values ${val2}`);
console.log(`value with null ${val1}`);

