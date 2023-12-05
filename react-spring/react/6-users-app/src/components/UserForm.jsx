/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ userSelect, handlerCloseForm}) => {

    const {initialUserForm, handlerAddUsers, handlerUpdateUser, errors} = useContext(UserContext);
    const [userForm, setUserForm] = useState(initialUserForm);
    const {userName, password, email, admin} = userForm;
    const [checked, setChecked] = useState(userForm.admin);

    useEffect(() => {
        setUserForm({...userSelect});
    }, [userSelect])

    const onInputChange = ({target}) => {
        const {name, value} = target
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (userSelect.id) {
            handlerUpdateUser(userForm); 
            Swal.fire(
                'Usuario Actualizado!',
                'Los datos del usuario han sido actualizados con éxito!',
                'success'
            );
        } else { 
            handlerAddUsers(userForm);
        }
    }

    const onCheckBoxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: !checked,
        });
    }
    

    return (
    <>
        <form onSubmit={onSubmit}>
            <input type="text"
             className="form-control my-3 w-75" 
             placeholder="Username" 
             name="userName"
             value={userName}
             onChange={onInputChange}
             />
            <p className="text-danger">{errors?.userName}</p>

            {userSelect.id > 0? "":
            <input type="password"
             className="form-control my-3 w-75" 
             placeholder="Password" 
             name="password" 
             value={password}
             onChange={onInputChange}
             />
            }
            <p className="text-danger">{errors?.password}</p>

            <input type="text"
             className="form-control my-3 w-75" 
             placeholder="Email" 
             name="email" 
             value={email}
             onChange={onInputChange}
             />
            <p className="text-danger">{errors?.email}</p>

            <div className="my-3 form-check">
                <input 
                    className="form-check-input" 
                    name="admin" 
                    type="checkbox" 
                    checked={admin}
                    onChange={onCheckBoxChange}
                />
                <label className="form-check-label">
                    Admin
                </label>
            </div>

            <button className="btn btn-primary" type="submit">
                {userSelect.id > 0? "Editar":"Crear"}
            </button>

            {
                !handlerCloseForm ||
                <button className="btn btn-primary mx-2" type="button" onClick={handlerCloseForm}>
                    Cerrar
                </button>
            }
            
        </form>
    </>
    );
}