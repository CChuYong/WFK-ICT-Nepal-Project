import Axios from 'axios'

Axios.interceptors.response.use((res) => {
    return Promise.resolve(res);
}, (error) => {
    console.log(error.config.url);
    if (error.status === 403) {
        window.location.href = '/login';
    }
    return Promise.reject(error);
})


export default Axios
