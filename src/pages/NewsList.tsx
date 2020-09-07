import React, { useEffect } from 'react';

import useFetch from '../hooks/useFetch';
import LinkItem from '../components/LinkItem';

import { Link } from '../interfaces';

type NewsPageProps = {
  pageName: 'news' | 'show' | 'newest' | 'ask' | 'jobs';
};

const NewsPage = ({ pageName }: NewsPageProps) => {
  const { data: links, loading, error } = useFetch<Link[]>(
    `https://api.hackerwebapp.com/${pageName}?page=1`
  );

  useEffect(() => {
    document.title = 'Hacker News Reader';
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', color: 'crimson' }}>
        {error.message}
      </div>
    );
  }

  return (
    <ul>
      {links?.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </ul>
  );
};

export default NewsPage;
