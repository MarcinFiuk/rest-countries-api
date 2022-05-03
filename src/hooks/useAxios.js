import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxios(url, endpoint = '/all', fields = '') {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await axios.get(url + endpoint + fields);
                setData(res.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, endpoint, fields]);

    return { data, error, isLoading };
}

export default useAxios;
