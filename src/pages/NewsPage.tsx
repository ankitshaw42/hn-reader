import React, { useState } from 'react';

import Pagination from '../components/Pagination';
import LinkList from '../components/LinkList';

import useFetch from '../hooks/useFetch';
import { Link } from '../interfaces';

type NewsPageProps = {
  pageName: string;
};

export default function NewsPage({ pageName }: NewsPageProps) {
  const [page, setPage] = useState(1);
  const { data: links, loading, error } = useFetch<Link[]>(
    `https://api.hackerwebapp.com/${pageName}?page=${page}`
  );

  const showNextPage = links?.length !== 0;

  return (
    <>
      <Pagination page={page} setPage={setPage} showNextPage={showNextPage} />

      {showNextPage ? (
        <LinkList links={links} loading={loading} error={error} />
      ) : (
        <p className="mt-4 text-center text-black font-hairline text-xl">
          Nothing to see here... yet.
        </p>
      )}
    </>
  );
}
