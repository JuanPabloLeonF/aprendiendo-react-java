import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

    const {
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

    } = useUsers();

    return(
    <>
        <UserContext.Provider
            value={
                {
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
            }>
                {children}
        </UserContext.Provider>
    </>
    )
}