import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";


export const UserModalForm = () => {

    const {userSelect, handlerCloseForm} = useContext(UserContext);

    return (
    <>
        <div className="open-modal animation fadeIn">
            <div className="modal" style={ {display: "block"} } tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userSelect.id > 0 ? "Editar":"Crear"} usuarios
                            </h5>
                        </div>
                        <div className="modal-body">
                            <UserForm 
                                userSelect={userSelect}
                                handlerCloseForm={handlerCloseForm}
                            ></UserForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}