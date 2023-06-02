import { useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [locationApi, setLocationApi] = useState();
    
    const getApi = () => {
        axios.get(url)
            .then(res => setLocationApi(res.data))
            .catch(error => console.error(error))
    }

    return [locationApi, getApi];

}

export default useFetch