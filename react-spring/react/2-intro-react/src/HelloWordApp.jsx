import PropTypes from "prop-types";
import { Title } from './components/Title';
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";


export const HelloWordApp = ({user,id}) => {

    //const name = "pepe";

    return (
    <>
        <Title title={"Titulo desde el componente Title"}/>
        <UserDetails user={user} id={id}/>
        <Book book={"No se que libro es"}/>
    </>
    );
}

HelloWordApp.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}

HelloWordApp.defaultProps = {
    title: "Hola mundo por defecto",
}