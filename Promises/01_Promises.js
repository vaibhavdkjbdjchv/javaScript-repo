const promiseOne = new Promise((resolve, reject) => {
    //Do an asynce task
    // DB calls ,cryptogrphy,network

    setTimeout(() => {
        console.log("Asynce task Done");
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log("Promeses done");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("new Promies without storing in variable");
        resolve()
    }, 1000)
}).then(() => {
    console.log("asynce resolve Two");
})


// ----------------------THREE PROMISE---------
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "vaibhav", Email: "vaibhav@gmail.com" })
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        !error ? resolve({ useraName: "vitthal", Age: "21" }) : reject('ERROR :Somthing went wrong');
    }, 1000)
})
promiseFour.then((user) => {
    return ("UserName :-", user.useraName);
}).then((username) => {
    console.log("UserName :- ", username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise reject or resolve");
})



const promisesFive = new Promise((reject, resolve) => {
    setTimeout(() => {
        let error = false;
        !error ? resolve({ useraName: "vitthal", Age: "21" }) : reject('ERROR :Somthing went wrong');
    }, 1000)
});

async function consumeFive() {
    const responce = await promisesFive
    console.log(responce);
}

consumeFive().catch((error) => {
    console.log(error);
})

async function getAllUser() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(responce);
    const data = await responce.json();
    console.log(data);
}

getAllUser().catch((e) => {
    console.log(e);
})

async function getalluser() {
    const responce = await fetch("https://api.github.com/users/hiteshchoudhary")
    const data = await responce.json()
    return data;
}

getalluser().then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e);
})