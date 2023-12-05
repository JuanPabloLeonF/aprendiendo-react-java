import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

/* eslint-disable react/prop-types */
export const UserRow = ({user}) => {

    const {handlerRenoveUsers, handlerUpdateUser} = useContext(UserContext);
    const {login} = useContext(AuthContext);
    
    return (
    <>
        <tr>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            {
                !login.isAdmin ||
                <>
                    <td>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => handlerUpdateUser(user)}>
                            update
                        </button>
                    </td>
                    <td>
                        <NavLink className="btn btn-secondary btn-sm" to={"/users/edit/" + user.id}>
                            update2
                        </NavLink>
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handlerRenoveUsers(user.id)}>
                            remove
                        </button>
                    </td>
                </>
            }
        </tr>
    </>
    );
}