import invoiceFindById, {invoceArray} from "./data/invoices";

const newArrayInvoce = invoceArray.map( i => {
    return i.name;
});

console.log(newArrayInvoce)

//const invoiceFindById = invoceArray.find(i => i.id == 2);
console.log(invoiceFindById(2));

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