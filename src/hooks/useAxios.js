import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url, endpoint = '/all', fields = '') {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url + endpoint + fields);
                console.log('res', res);
                setData(res.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [url, endpoint, fields]);

    return { data, error };
}

export default useAxios;
