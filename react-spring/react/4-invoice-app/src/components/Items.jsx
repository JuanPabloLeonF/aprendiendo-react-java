import { RowItems } from "./RowItems";
import  PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const Items = ({ items, deleteProduct }) => {
    return (
        <>
            <h4>Productos de la factura</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id, product, price, quantify}) => (
                        <RowItems 
                            deleteProduct={deleteProduct}
                            key={id} 
                            id={id}
                            product={product} 
                            price={price} 
                            quantify={quantify}
                        ></RowItems>
                    ))}
                </tbody>
            </table>
        </>
    );
}

Items.proptypes = {
    items: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}