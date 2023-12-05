import { useReducer, useEffect } from "react";
import { AddProductCart, DeleteProduct, UpdateProductCart } from "../reducer/itemsActions";
import { itemsReducer } from "../reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [ cartItems, dispacher] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [ cartItems ]);

    const handlerAddProductCart = (product) => {
        const existingItem = cartItems.find((item) => item.product.id === product.id);
    
        if (existingItem) {
            dispacher(
                {
                    type: UpdateProductCart,
                    payload: product,
                }
            )
        } else {
            dispacher(
                {
                    type: AddProductCart,
                    payload: product,
                }
            )
        }
    };

    const handlerDeleteProduct = (id) => {
        dispacher(
            {
                type: DeleteProduct,
                payload: id,
            }
        )
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct,
    }
}