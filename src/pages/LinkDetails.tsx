import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import LinkItem from '../components/LinkItem';
import useFetch from '../hooks/useFetch';

function LinkDetails() {
  const match = useRouteMatch<any>();
  const { linkId } = match.params;

  const { data: link, loading, error } = useFetch<any>(
    `https://api.hackerwebapp.com/item/${linkId}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main>
      {link && <LinkItem link={link} showComments={false} />}

      <h2>Comments</h2>
    </main>
  );
}

export default LinkDetails;
