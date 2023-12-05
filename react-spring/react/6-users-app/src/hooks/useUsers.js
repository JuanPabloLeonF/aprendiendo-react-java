import { usersReducer } from "../reducer/usersReducer";
import {useContext, useReducer, useState} from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { findAll, remove, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";

const initialUsers = []

const initialUserForm = {
    id: 0,
    userName: "",
    password: "",
    email: "",
    admin: false,
}

const initialErrors = {
    userName: "",
    password: "",
    email: "",
}

export const useUsers = () => {

    const [users, dispacher] = useReducer(usersReducer, initialUsers); 
    const [userSelect, setUserSelect] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const [errors, setErrors] = useState(initialErrors);
    const {login, handlerLogout} = useContext(AuthContext);
    const navigate = useNavigate();

    const getAllUsers = async () => {

        try {
            const data = await findAll();
            dispacher({
                type: "loadingUsers",
                payload: data,
            });
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout()
            }
        }
    }

    const handlerAddUsers = async (user) => {

        if(!login.isAdmin) {
            return;
        }

        try {

            const data = await save(user);

            dispacher({
                type: "addUser",
                payload: data,
            })
    
            Swal.fire(
                'Usuario Creado!',
                'El usuario ha sido creado con éxito!',
                'success'
            )
    
            handlerCloseForm();
            navigate("/users");

        } catch (error) {
            if(error.response && error.response.status == 400) {
                setErrors(error.response.data);

            } else if (error.response && error.response.status == 500 && 
                error.response.data?.message?.includes("constraint")) {

                    if(error.response.data?.message?.includes("UK_username")) {
                        setErrors({userName: "El username ya existe"})
                    }

                    if(error.response.data?.message?.includes("UK_email")) {
                        setErrors({email: "El email ya existe"})
                    }
            } else if (error.response?.status == 401) {
                handlerLogout()
            } else {
                throw error;
            }
        }
    }

    const handlerRenoveUsers = (id) => {

        Swal.fire({
            title: '¿Estas seguro que deseas eliminar?',
            text: "No podras revertir esta opcion si le das en eliminar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, eliminar!'
          }).then(async (result) => {
            if (result.isConfirmed) {

                if(!login.isAdmin) {
                    return;
                }
                await remove(id);

                try {
                    dispacher({
                        type: "removeUser",
                        payload: id,
                    })
                    
                    Swal.fire(
                        'Usuario eliminado',
                        'El usuario ha sido eliminado con exito',
                        'success'
                    )
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout()
                    }
                }
            }
          })
    }

    const handlerUpdateUser = async (user) => {

        if(!login.isAdmin) {
            return;
        }
        try {
            const data = await update(user);

            setVisibleForm(true);
            setUserSelect({...user});
            dispacher({
                type: "updateUser",
                payload: data,
            })
        } catch (error) {
            if(error.response && error.response.status == 400) {
                setErrors(error.response.data);
            } else if (error.response?.status == 401) {
                handlerLogout()
            } else {
                throw error;
            }
        }
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelect(initialUserForm);
        setErrors(initialErrors)
    }

    return {
        users,
        userSelect,
        handlerAddUsers,
        handlerRenoveUsers,
        handlerUpdateUser,
        initialUserForm,
        visibleForm,
        handlerOpenForm,
        handlerCloseForm,
        getAllUsers,
        errors,
    }
}