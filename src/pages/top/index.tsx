import React from 'react';

import LinkItem from '../../components/LinkItem';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import useFetch from '../../hooks/useFetch';

import { Link } from '../../interfaces';

const Top = () => {
  useDocumentTitle('HN - Top Links');
  const { data: links, loading, error } = useFetch<Link[]>(
    'https://api.hackerwebapp.com/news?page=1'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main className="link-wrapper">
      <ul>
        {links && links.map((link) => <LinkItem key={link.id} link={link} />)}
      </ul>
    </main>
  );
};

export default Top;
