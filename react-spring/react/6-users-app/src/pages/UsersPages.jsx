import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

export const UsersPages = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
        getAllUsers,
    } = useContext(UserContext);

    const {login} = useContext(AuthContext);

    useEffect(() => {
        getAllUsers();
    }, [])

    return (
    <>
        { 
            !visibleForm ||
            <UserModalForm></UserModalForm>
        }

        <div className="container my-4">
            <h2>UsersApp</h2>
            <div className="row">
                <div className="col">
                    {
                        (visibleForm || !login.isAdmin) ||
                        <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                            Nuevo usuario
                        </button>
                    }

                    {
                        users.length ===  0 ?
                        <div className="alert alert-warning">No hay usuarios en el sistema</div>
                        :
                        <UsersList></UsersList>
                    }
                </div>
            </div>
        </div>
    </>
    );
}