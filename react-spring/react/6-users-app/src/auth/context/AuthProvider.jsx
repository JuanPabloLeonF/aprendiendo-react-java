import { useLogin } from "../hooks/useLogin";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}) => {

    const {login, handlerLoging, handlerLogout} = useLogin();

    return(
    <>
        <AuthContext.Provider
            value={
                {
                    login, 
                    handlerLoging, 
                    handlerLogout
                }
            }>
            {children}
        </AuthContext.Provider>
    </>
    );
}