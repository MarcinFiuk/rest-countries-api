import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function useAxios(baseURL, endpoint = '/all', query) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const queryRef = useRef();
    queryRef.current = query;

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            setError('');

            try {
                const res = await axios.get(endpoint, {
                    signal: controller.signal,
                    baseURL,
                    params: queryRef.current,
                });
                setData(res.data);
                setIsLoading(false);
            } catch (error) {
                if (error.name === 'CanceledError') {
                    return;
                }
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [baseURL, endpoint]);

    return { data, error, isLoading };
}

export default useAxios;
