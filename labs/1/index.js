let Adder = require ("./Adder.js")

let myAdder =new Adder(
    {
    a:6,
    b:9
    }
)

console.log(myAdder.render());