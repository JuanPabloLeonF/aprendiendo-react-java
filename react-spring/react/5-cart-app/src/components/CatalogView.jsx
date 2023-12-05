import { useEffect, useState } from "react";
import {getProducts} from "../services/productsService";
import { CatalogoItems } from "./CatalogoItems";

/* eslint-disable react/prop-types */
export const CatalogView = ({handlerAddProductCart}) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async () => {
        const data = await getProducts();
        setProducts(data);
        setIsLoading(false);
    }

    useEffect( () => {
        findAll();
    }, []);

    return (
    <>
        {
            isLoading && <div className="alert alert-info">Cargando ...</div>
        }
        <div className="row">
            {products.map((product) => (
                <div className="col-4 my-2" key={product.id}>
                    <CatalogoItems product={product} handlerAddProductCart={handlerAddProductCart}></CatalogoItems>
                </div>
            ))}
        </div>
    </>
    );
}