/* eslint-disable no-useless-catch */
import axios from "axios";

export const loginAuth = async ({userName, password}) => {
    try {
        return await axios.post("http://localhost:8082/login", 
        {
            userName, 
            password,
        }
    );
    } catch (error) {
        throw error;
    }
}