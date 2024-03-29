import axios from "axios";

const API_HTTPS_SERVICES = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: false,
})

API_HTTPS_SERVICES.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json'

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export async function getPosts() {
    try {
        const response = await API_HTTPS_SERVICES.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
    }
}

export async function getPost(id:string){
    try {
        const response = await API_HTTPS_SERVICES.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
    }
}