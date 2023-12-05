import { Route, Routes, Navigate } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPages } from "../pages/RegisterPages";
import { UserProvider } from "../context/UserProvider";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";

export const UserRoutes = () => {

    const {login} = useContext(AuthContext);

    return (
    <>
        <UserProvider>
            <Navbar></Navbar>
            <Routes>
                <Route path="users" 
                    element={
                        <UsersPages></UsersPages>
                        }>
                </Route>
                {
                    !login.isAdmin ||
                    <>
                        <Route 
                            path="users/register" 
                            element={
                                <RegisterPages></RegisterPages>
                            }>
                        </Route>

                        <Route 
                            path="users/edit/:id" 
                            element={
                                <RegisterPages></RegisterPages>
                            }>
                        </Route>
                    </>
                }

                <Route path="/" element={<Navigate to={"/users"}></Navigate>}></Route>
            </Routes>
        </UserProvider>
    </>
    );
}