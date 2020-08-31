import { useEffect, useState } from 'react';

import { Link } from '../interfaces';

export default function useLinks(
  title: string,
  linkFetcher: () => Promise<Link[]>
) {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    async function getLinks() {
      try {
        setLoading(true);
        const response = await linkFetcher();
        setLinks(response);
      } catch (error) {
        setError(error);
        console.log(error);
      }

      setLoading(false);
    }

    getLinks();
  }, [linkFetcher]);

  return { links, error, loading };
}
