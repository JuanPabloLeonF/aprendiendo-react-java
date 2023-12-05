let products = ["silla", "mesa", "teclado"];

products = products.concat("computador", "silicona")

const fruits = ["peras", "manzanas", "sandia", "fresas"];

const mercado = [ ...fruits, ...products, "lechuga", "papas"];

console.log(mercado);

