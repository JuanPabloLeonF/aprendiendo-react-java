export const invoceArray = [
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

// export default (idFind) => {
//    return invoceArray.filter(i => i.id > idFind);
// }

export const invoiceFindById = (idFind) => {
    return invoceArray.find(i => i.id === idFind);
}

export const promiseFunction = (idFind) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceFindById(idFind);
            if(result == undefined) {
                reject("No existe una invoice con el id solicitado");
            }
            resolve(result);
        }, 2500)
    });
    
    promise.then((json) => {
        console.log(json);
    }).catch((error) => {
        console.error(error);
    })
}