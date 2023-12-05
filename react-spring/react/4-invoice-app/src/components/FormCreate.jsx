/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const FormCreate = ({ items, addProduct  }) => {

  const [invoiceItems, setInvoiceItemsValue] = useState({
    product: "",
    price: "",
    quantify: "",
  });

  const {product, price, quantify} = invoiceItems;

  const onInputChange = ({target: {name, value}}) => {
    setInvoiceItemsValue({
      ...invoiceItems,
      [name]: value
    })
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if(product.trim().length <= 1) return;
    if(price.trim().length <= 1) return;
    if(isNaN(price.trim())) return;
    if(quantify.trim().length < 1) return;
    if(isNaN(quantify.trim())) return;

    const priceConvert = parseFloat(price);
    const quantifyConvert = parseInt(quantify); 

    addProduct({
      id: items.length + 1,
      product: product,
      price: priceConvert,
      quantify: quantifyConvert
    });

    setInvoiceItemsValue({
      product: "",
      price: "",
      quantify: "",
    });
  }

  useEffect(() => {
      console.log("El formulario cambio");
  }, [invoiceItems])

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="product"
          placeholder="Nombre del producto"
          className="form-control m-3"
          value={product}
          onChange={onInputChange}
        />

        <input
          type="text"
          name="price"
          placeholder="Precio del producto"
          className="form-control m-3"
          value={price}
          onChange={onInputChange}
        />

        <input
          type="text"
          name="quantify"
          placeholder="Cantidad del producto"
          className="form-control m-3"
          value={quantify}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-primary m-3">
          Guardar
        </button>
      </form>
    </>
  );
};
