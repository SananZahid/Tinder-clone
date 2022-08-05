import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-clone-backend-ziahub.herokuapp.com",
});

export default instance;