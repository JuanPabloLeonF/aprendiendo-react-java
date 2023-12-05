import { getInvoice } from "./services/getInvoice";
import { Company } from "./components/Company";
import { Customer } from "./components/Customer";
import { Invoice } from "./components/Invoice";
import { Items } from "./components/Items";
import { TotalView } from "./components/TotalView";
import { FormCreate } from "./components/FormCreate";
import { useEffect, useState } from "react";

const invoiceData = {
    id: 0,
    name: "",
    cliente: {
        name: "",
        lastName: "",
        address: {
            country: "",
            city: "",
            street: "",
            number: 0,
        },
    },
    company: {
        name: "",
        fiscalNumber: 0,
    },
    items: [],
}

export const InvoiceApp = () => {

    const [ activeForm, setActiveForm] = useState(false);

    const [invoiceState, setInvoiceState] = useState(invoiceData);
    const { id, name, cliente, company, items } = invoiceState;
    const { name: nameCliente, lastName, address } = cliente;
    const { country, city, street, number } = address;
    const { name: nameCompany, fiscalNumber } = company;

    const addProduct = (newProduct) => {
        setInvoiceState((prevInvoiceState) => ({
            ...prevInvoiceState,
            items: [...prevInvoiceState.items, newProduct],
        }));
    };

    const deleteProduct = (idToDelete) => {
        setInvoiceState((prevInvoiceState) => ({
            ...prevInvoiceState,
            items: prevInvoiceState.items.filter((item) => item.id !== idToDelete),
        }));
    };
    

    useEffect(() => {
        const data = getInvoice();
        setInvoiceState(data);
    }, []);

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        <h1>Datos de la factura</h1>
                    </div>
                    <div className="card-body">
                        <div className="col">
                            <Invoice id={id} name={name}></Invoice>
                        </div>
                        <div className="row my-3">
                            <div className="col">
                                <Customer
                                    nameCliente={nameCliente}
                                    lastName={lastName}
                                    country={country}
                                    city={city}
                                    street={street}
                                    number={number}
                                ></Customer>
                            </div>
                            <div className="col">
                                <Company
                                    nameCompany={nameCompany}
                                    fiscalNumber={fiscalNumber}
                                ></Company>
                            </div>
                        </div>
                        
                        <div className="row my-3">
                            <Items items={items} deleteProduct={deleteProduct}></Items>
                            <TotalView total={items}></TotalView>
                            <div className="col">
                                <button className="btn btn-secondary" onClick={onActiveForm}>
                                    {!activeForm ? "Agregar Producto": "Ocultar Formulario"}
                                </button>
                            </div>
                            {!activeForm? "": <FormCreate items={items} addProduct={addProduct}></FormCreate>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
