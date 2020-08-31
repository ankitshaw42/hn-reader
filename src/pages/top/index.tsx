import React from 'react';

import { getNews } from '../../api';
import useLinks from '../../hooks/useLinks';
import LinkItem from '../../components/LinkItem';

const Top = () => {
  const { links, error, loading } = useLinks('HN - Top Stories', getNews);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main className="link-wrapper">
      <ul>
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </ul>
    </main>
  );
};

export default Top;
