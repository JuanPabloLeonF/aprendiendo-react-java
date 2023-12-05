import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProduct} = useItemsCart();

    return (
    <>
        <Navbar></Navbar>
        <h3>Cart App</h3>

        <div className="container my-4">
            <CartRoutes handlerAddProductCart={handlerAddProductCart} handlerDeleteProduct={handlerDeleteProduct} cartItems={cartItems}></CartRoutes>
        </div>
    </>
    );
}