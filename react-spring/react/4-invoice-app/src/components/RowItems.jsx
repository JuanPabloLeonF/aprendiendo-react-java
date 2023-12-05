import  PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const RowItems = ({id, product, price, quantify, deleteProduct}) => {

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantify}</td>
                <td>
                    <button
                        className="btn btn-danger" 
                        onClick={() => deleteProduct(id)}>
                            Eliminar
                    </button>
                </td>
            </tr>
        </>
    );
}

RowItems.proptypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantify: PropTypes.number.isRequired
}