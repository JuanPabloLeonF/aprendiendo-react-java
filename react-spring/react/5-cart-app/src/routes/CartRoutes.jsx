/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import {CatalogView} from "../components/CatalogView"

export const  CartRoutes = ({handlerAddProductCart, handlerDeleteProduct, cartItems}) => {
    return (
    <>
        <Routes>
            <Route 
                path="catalog" 
                element={<CatalogView handlerAddProductCart={handlerAddProductCart}></CatalogView>}>
            </Route>

            <Route 
                path="cart" 
                element={cartItems?.length <= 0 ? 
                    <div className="alert alert-warning">
                        No hay productos en el carrito de compras
                    </div>
                    :
                    (
                    <div className="my-4 w-50">
                        <CartView cartItems={cartItems} handlerDeleteProduct={handlerDeleteProduct}></CartView>
                    </div>
                )}>
            </Route>
            <Route path="/" element={<Navigate to={"/catalog"}></Navigate>}></Route>
        </Routes> 
    </>
    );
}