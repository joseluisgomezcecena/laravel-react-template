import axios from "axios";

import cogoToast from "cogo-toast";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    (error)=>{
        cogoToast.error('Server responded with status code '+error.response.status+' '+error.code);
        return Promise.reject(error);
    }
)


export const HttpClient = () =>{
    const token = localStorage.getItem('token');
    const defaultSettings = {
        headers: {
            authorizartion: token ? `Bearer ${token}` : ''
        }
    }

    return{
        get: async (url) => axios.get(url, {...defaultSettings}),
        post : async (url, data) => axios.post(url, data, {...defaultSettings}),
        put : async (url, data) => axios.put(url, data, {...defaultSettings}),
        delete : async (url) => axios.delete(url, {...defaultSettings})
    }

}
