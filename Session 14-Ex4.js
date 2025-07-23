let original = {
    name: "Bob",
    age: 30,
};

let copy = Object.assign({},original);
copy.name = "Charlie";
console.log(original);
console.log(copy);