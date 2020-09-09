import React, { useEffect, useState } from 'react';

import Pagination from '../components/Pagination';
import LinkList from '../components/LinkList';

import useFetch from '../hooks/useFetch';
import { Link } from '../interfaces';

type NewsPageProps = {
  pageName: string;
};

const NewsPage = ({ pageName }: NewsPageProps) => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch<Link[]>(
    `https://api.hackerwebapp.com/${pageName}?page=${page}`
  );

  useEffect(() => {
    document.title = 'Hacker News Reader';
  }, []);

  return (
    <main className="mt-12 p-2 text-gray-800">
      <Pagination page={page} setPage={setPage} />
      <LinkList links={data} loading={loading} error={error} />
    </main>
  );
};

export default NewsPage;
