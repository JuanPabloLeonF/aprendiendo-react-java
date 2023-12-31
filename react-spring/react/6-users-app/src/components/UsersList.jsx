import { useContext } from "react";
import { UserRow } from "./UserRow";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";

/* eslint-disable react/prop-types */
export const UsersList = () => {

    const {users} = useContext(UserContext);
    const {login} = useContext(AuthContext);

    return (
    <>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>userName</th>
                    <th>email</th>
                    {
                        !login.isAdmin ||
                        <>
                            <th>update</th>
                            <th>update rout</th>
                            <th>remove</th>
                        </>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>(
                        <UserRow user={user} key={user.id}></UserRow>
                    ))
                }
            </tbody>
        </table>
    </>
    );
}