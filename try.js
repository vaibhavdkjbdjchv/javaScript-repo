console.log(":hi");
const mySum =[5,2,3];


const myTotal = mySum.reduce((acc, currval)=>{
    console.log(`acc := ${acc} Curval:=  ${currval}`);
    return acc+currval
},0);

console.log(myTotal);