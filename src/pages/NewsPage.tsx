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

  const showNextPage = data?.length !== 0;

  return (
    <>
      <Pagination page={page} setPage={setPage} showNextPage={showNextPage} />
      {showNextPage ? (
        <LinkList links={data} loading={loading} error={error} />
      ) : (
        <p className="mt-4 text-center text-black font-hairline text-xl">
          Nothing to see here!
        </p>
      )}
    </>
  );
};

export default NewsPage;
