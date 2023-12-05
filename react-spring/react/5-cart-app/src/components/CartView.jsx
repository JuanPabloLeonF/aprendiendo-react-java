/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { calculateTotalPrice } from "../services/productsService";
import { useNavigate } from "react-router-dom";


/* eslint-disable react/prop-types */
export const CartView = ({ cartItems, handlerDeleteProduct }) => {

    const [total, setItem] = useState(0);
    const navigate = useNavigate();

    const onCatalog = () => {
        navigate("/catalog");
    }

    useEffect(() => {
        setItem(calculateTotalPrice(cartItems));
    }, [ cartItems ]);

    const onDeleteProduct = (id) => {
        handlerDeleteProduct(id);
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>${item.product.price}</td>
                            <td>{item.quantify}</td>
                            <td>{item.quantify * item.product.price}</td>
                            <td>
                                <button 
                                    className="btn btn-danger" 
                                    onClick={(id) => onDeleteProduct(item.product.id)}>
                                        Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            <button className="btn btn-success" onClick={() => onCatalog()}>
                Seguir comprando
            </button>
        </>
    );
};
