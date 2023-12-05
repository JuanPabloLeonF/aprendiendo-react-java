const invoceArray = [
    {
        id:2,
        name:"compras de ropa",
        price: 190,
        client: {
            name: "Julian",
            lastName: "Leon",
        },
    
        item: [
            {
                product: "hj",
                price: 122.8,
                category: "tecnology",
                cuantify: 2
            },
            {
                product: "ty",
                price: 38.7,
                category: "tecnology",
                cuantify: 4
            }
        ],
    },

    {
    id:3,
    name:"compras de frutas",
    price: 190,
    client: {
        name: "Julian",
        lastName: "Leon",
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
}
]

const newArrayInvoce = invoceArray.map( i => {
    return i.name;
});

console.log(newArrayInvoce)

const invoiceFindById = invoceArray.find(i => i.id == 2);
console.log(invoiceFindById);

const invoiceFilter = invoceArray.filter(i => i.id > 2);
console.log(invoiceFilter);

const invoiceFilter2 = invoceArray.filter(i => i.item.includes({
    product: "mouse",
    price: 38.7,
    category: "tecnology",
    cuantify: 4
}));
console.log(invoiceFilter2);

const result = invoceArray.some(i => i.id == 2);
console.log(result);

const invoceDelete = invoceArray.filter(i => i.id != 2);
console.log(invoceDelete);