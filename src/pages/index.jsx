import React from 'react';

import LinkItem from '../components/LinkItem';

import useFetch from '../hooks/useFetch';

const NewsPage = ({ pageName }) => {
  const { data: links, loading, error } = useFetch(
    `https://api.hackerwebapp.com/${pageName}?page=1`
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

export default NewsPage;
