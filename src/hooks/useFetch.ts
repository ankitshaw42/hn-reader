import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
        console.log(error);
      }

      setLoading(false);
    }

    getData();
  }, [url]);

  return { data, error, loading };
}
