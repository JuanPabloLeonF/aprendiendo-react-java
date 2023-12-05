
export const getProducts = async () => {

    const response = await fetch("http://localhost:8081/product/getall");
    const products = await response.json();
    return products;
}

export const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((accumulator, item) => accumulator + item.product.price * item.quantify, 0);
}
