// const map = new Map();
// map.set("name", "vaibhav");
// map.set("add", "amb");
// map.set("age", "21");
// map.set("position", "web developer");

// for (const [key , value] of map) {
//     console.log(`${key} :- ${value}`);

// }



// filter method

const book = [

    {
        bookName: " book1", Title: "HIstoric", publish: 1952

    },
    {
        bookName: " book2", Title: "tec", publish: 1956

    },
    {
        bookName: " book3", Title: "HIstoric", publish: 1952

    },
    {
        bookName: " book4", Title: "HIstoric", publish: 1985

    },
    {
        bookName: " book5", Title: "science", publish: 2001

    },
    {
        bookName: " book6", Title: "HIstoric", publish: 1999

    },
    {
        bookName: " book7", Title: "tec", publish: 2001

    },
    {
        bookName: " book8", Title: "science", publish: 2005

    },
]

const boofinder = book.filter((bk) => bk.Title === "tec" && bk.publish > 2000)
console.log(boofinder);






