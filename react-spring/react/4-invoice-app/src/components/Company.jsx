import  PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const Company = ({nameCompany, fiscalNumber}) => {
    return(
    <>
        <h3>Datos de la empresa</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nameCompany}</li>
            <li className="list-group-item">{fiscalNumber}</li>
        </ul>
    </>
    );
} 

Company.proptypes = {
    nameCompany: PropTypes.string.isRequired,
    fiscalNumber: PropTypes.number.isRequired
}