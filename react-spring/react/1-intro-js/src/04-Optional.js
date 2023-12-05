const Invoce = {
    id:2,
    name:"compras de ropa",
    price: 190,
    date: new Date,
    client: {
        id: 1,
        name: "Julian",
        lastName: "Leon",
        age: 23
    },

    fast: function correr() {
        console.log("hola funcion dentro del objeto")
    },

    item: [
        {
            product: "teclado",
            price: 122.8,
            category: "tecnology",
            cuantify: 2
        },
        {
            product: "mouse",
            price: 38.7,
            category: "tecnology",
            cuantify: 4
        }
    ],

    total: function calculateTota() {

        let totalPrice = 0;
        
        this.item.forEach(element => {
            totalPrice = totalPrice + element.price * element.cuantify;
        })

        return totalPrice;
    }
}

console.log(Invoce.client?.name)