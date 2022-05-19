import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function useAxios(baseURL, endpoint, query, formatter = (d) => d) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
                setData(formatter(res.data));
                setIsLoading(false);
            } catch (err) {
                if (err.name === 'CanceledError') {
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
