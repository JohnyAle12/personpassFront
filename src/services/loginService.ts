import axios from "axios";
import { UserApp } from '../types/ContextApp';

type Request = {
    email: string;
    password: string;
}

const loginService = async(props : Request): Promise<UserApp> => {
    
    const url = 'http://localhost:8000/api/login';
    const { user, access_token } = await axios.post(url, props)
        .then(res => res.data)
        .catch(error => {
            throw new Error(error.response.data.message);
        });
    
    const {
        id,
        name,
        lastname,
        mobile,
        email
    } = user;
    
    return {
        id,
        name,
        lastname,
        mobile,
        email,
        token: access_token,
    }
}

export default loginService;