import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

function useFetch<T = unknown>(url: string, dependencies?: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dependencies]);

  return { data, isLoading, error };
}

export default useFetch;
