import  PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const Invoice = ({id, name}) => {
    return (
    <>
        <ul className="list-group">
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Name: {name}</li>
        </ul>
    </>
    );
}

Invoice.proptypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}