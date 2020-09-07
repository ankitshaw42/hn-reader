import React, { useEffect, useState } from 'react';

import LinkItem from '../components/LinkItem';
import Pagination from '../components/Pagination';

import useFetch from '../hooks/useFetch';
import { Link } from '../interfaces';

type NewsPageProps = {
  pageName: 'news' | 'show' | 'newest' | 'ask' | 'jobs';
};

const NewsPage = ({ pageName }: NewsPageProps) => {
  const [page, setPage] = useState(1);
  const { data: links, loading, error } = useFetch<Link[]>(
    `https://api.hackerwebapp.com/${pageName}?page=${page}`
  );

  useEffect(() => {
    document.title = 'Hacker News Reader';
  }, []);

  let status = null;

  if (loading) {
    status = <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  if (error) {
    status = (
      <div style={{ textAlign: 'center', color: 'crimson' }}>
        {error.message}
      </div>
    );
  }

  return (
    <>
      <Pagination page={page} setPage={setPage} />

      {status || (
        <ul>
          {links?.map((link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NewsPage;
