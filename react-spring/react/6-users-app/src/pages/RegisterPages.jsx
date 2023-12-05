import { useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RegisterPages = () => {

    const {users=[], initialUserForm} = useContext(UserContext);
    const [userSelect, setUserSelect] = useState(initialUserForm);
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSelect(user);
        }
    }, [id])

    return (
    <>
        <div className="container my-4">
            <h4>{userSelect.id > 0 ? "Editar":"Registarr"}</h4>
            <div className="row">
                <div className="col">
                    <UserForm userSelect={userSelect}></UserForm>
                </div>
            </div>
        </div>
    </>
    );
}