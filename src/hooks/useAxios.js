import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function useAxios(baseURL, endpoint = '/all', query = {}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const queryRef = useRef();

    // We receive an UNSTABLE reference to the query object.
    // And we need a STABLE reference to use in the useEffect hook.
    // We use the useRef hook to create a STABLE reference and avoid re-rendering.
    queryRef.current = query;

    useEffect(() => {
      const abortController = new AbortController();

      const fetchData = async () => {
          setIsLoading(true);

          try {
              const res = await axios.get(endpoint, {
                  baseURL,
                  params: queryRef.current,
                  signal: abortController.signal,
              });

              setData(res.data);
              setIsLoading(false);
          } catch (err) {
              if (err.name === 'CanceledError') {
                  return;
              }

              setError(err);
              setIsLoading(false);
          }
      };

      fetchData();

      return () => {
          // Avoiding race conditions
          abortController.abort();
      };
    }, [baseURL, endpoint]);

    return { data, error, isLoading };
}

export default useAxios;
