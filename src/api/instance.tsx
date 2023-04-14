import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
})
export default instance