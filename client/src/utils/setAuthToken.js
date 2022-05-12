import axios from "axios";


const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
        console.log('Token Set');
    } else {
        console.log('Token Not Set')
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;