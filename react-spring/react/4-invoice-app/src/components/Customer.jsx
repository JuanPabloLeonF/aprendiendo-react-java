import  PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const Customer = ({nameCliente, lastName, country, city, street, number}) => {

    return(
    <>
        <h3>Datos del cliente</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nameCliente} {lastName}</li>
            <li className="list-group-item">{country} / {city}</li>
            <li className="list-group-item">{street} {number}</li>
        </ul>
    </>
    );
}

Customer.proptypes = {
    nameCliente: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}