/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export const CatalogoItems = ({product, handlerAddProductCart}) => {

  const navigate = useNavigate();

  const onAddProduct = (product) => {
    handlerAddProductCart(product);
    navigate("/cart");
  }

  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary" onClick={() => onAddProduct(product)}>Agregar</button>
            </div>
        </div>
    </>
  );
}
