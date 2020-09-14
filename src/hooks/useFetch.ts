import { useEffect, useState } from 'react';

const cache: {
  [url: string]: any;
} = {};

export default function useFetch<TData>(url: string) {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data;
        setData(data);
      } catch (error) {
        setError(error);
        console.error(error);
      }

      setLoading(false);
    }

    if (cache[url]) {
      setData(cache[url]);
    } else {
      getData();
    }
  }, [url]);

  return { data, error, loading };
}
