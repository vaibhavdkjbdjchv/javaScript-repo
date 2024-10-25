// const user = new Object();
// user.name = "vaibhav"
// user.age = 30
// user["city"] = "New York"
// console.log(user);

// // diffrent way of creationg object
// const user2 = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer',
// }
// console.log(user2);
// console.log(user2.name);




const obj1 = { 1: "a", 2: "9" }
const obj2 = { 3: "a", 4: "9" }
// const obj3 = { obj1, obj2 }
const obj3 =Object.assign({} ,obj1,obj2)
const obj4= {...obj1,...obj2} //sprade object
console.log(obj3);


