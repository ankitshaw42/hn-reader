import React from 'react';

import LinkItem from '../components/LinkItem';
import { useRouteMatch } from 'react-router-dom';
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

  console.log(link);

  return (
    <div>
      {link && <LinkItem link={link} showComments={false} />}

      <h2>Comments</h2>
    </div>
  );
}

export default LinkDetails;
