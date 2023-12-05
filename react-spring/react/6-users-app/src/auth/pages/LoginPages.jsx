import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
    userName: "",
    password: "",
}

export const LoginPages = () => {

    const {handlerLoging} = useContext(AuthContext);
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {userName, password} = loginForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(!userName || !password){
            Swal.fire(
                "Error de validacion",
                "Username y Password son requeridos",
                "error"
            );
        }

        handlerLoging({userName, password});

        setLoginForm(initialLoginForm);
    }

    return (
    <>
        <div className="modal" style={ {display:"block"} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Pages</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Username" 
                                name="userName"
                                value={userName}
                                type="text"
                                onChange={onInputChange}
                            ></input>
                            <input 
                                className="form-control my-3 w-75" 
                                placeholder="Password" 
                                name="password"
                                type="password"
                                value={password}
                                onChange={onInputChange}
                            ></input>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}