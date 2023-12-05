/* eslint-disable no-useless-catch */
import axios from "axios"

const configuration = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem("token"),
            "Content-Type": "application/json", 
        }
    }
}

export const findAll = async () => {
    try {
        const response = await axios.get("http://localhost:8082/user/getall");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const save = async ({userName, email, password, admin}) => {
    try {

        const response = await axios.post("http://localhost:8082/user/save", 
            {
                userName, 
                email, 
                password,
                admin
            },
            configuration()
        );

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const update = async ({userName, email, id, admin}) => {
    try {

        const response = await axios.put(`${"http://localhost:8082/user/update"}/${id}`, 
            {
                userName,
                email,
                admin
            },
            configuration()
        );

        return response.data;
        
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`${"http://localhost:8082/user/delete"}/${id}`, configuration())
    } catch (error) {
        throw error;
    }
}