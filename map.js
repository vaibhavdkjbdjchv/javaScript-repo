const map = new Map();
map.set("name", "vaibhav");
map.set("add", "amb");
map.set("age", "21");
map.set("position", "web developer");

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);

}