import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginReducer } from "../reducer/loginReducer";
import { loginAuth } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {isAuth: false,user: undefined, isAdmin:false}

export const useLogin = () => {

    const [login, dispach] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLoging = async ({userName, password}) => {
        
        try {

            const response = await loginAuth({userName, password});
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            const user = {userName: claims.sub}

            dispach({
                type: "login",
                payload: {user, isAdmin: claims.isAdmin},
            })

            sessionStorage.setItem("login", JSON.stringify({
                isAuth: true,
                user: user,
                isAdmin:  claims.isAdmin
            }));

            sessionStorage.setItem("token", `Bearer ${token}`)
            navigate("/users");

        } catch (error) {
            if(error.response?.status == 401) {
                Swal.fire(
                    "Error Login",
                    "Username o Password invalidos",
                    "error"
                );
            } else if (error.response?.status == 403) {
                Swal.fire(
                    "Error Login",
                    "No tiene permisos al recursos o permisos",
                    "error"
                );
            } else {
                throw error;
            }
        }
    }

    const handlerLogout = () => {
        dispach({
            type: "logout",
        })
        sessionStorage.removeItem("login");
        sessionStorage.removeItem("token");
        sessionStorage.clear();
    }

    return {
        login,
        handlerLoging,
        handlerLogout,
    }
}