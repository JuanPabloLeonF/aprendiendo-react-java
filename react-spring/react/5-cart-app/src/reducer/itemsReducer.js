import { AddProductCart, DeleteProduct, UpdateProductCart } from "./itemsActions";

/* eslint-disable no-undef */
export const itemsReducer = (state = [], action) => {

    switch (action.type) {

        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantify: 1,
                    total: action.payload.price * 1,
                },
            ];

        case UpdateProductCart:
            return state.map((item) => {
                if (item.product.id === action.payload.id) {
                    return {
                        ...item,
                        quantify: item.quantify + 1,
                        total: (item.quantify + 1) * item.product.price,
                    };
                }
                return item;
            });

        case DeleteProduct:
            return state.filter((i) => i.product.id !== action.payload);
            
        default:
            return state;
    }
}