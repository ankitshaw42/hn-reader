import { useEffect, useState } from 'react';

const cache = {};

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    async function getData() {
      if (cache[url]) {
        console.log('cache hit');
        setData(cache[url]);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data;
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
