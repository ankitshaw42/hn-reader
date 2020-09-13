import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import LinkItem from '../components/LinkItem';
import useFetch from '../hooks/useFetch';
import CommentList from '../components/CommentList';

function LinkDetails() {
  const match = useRouteMatch<any>();
  const { linkId } = match.params;

  const { data: link, loading, error } = useFetch<any>(
    `https://api.hackerwebapp.com/item/${linkId}`
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <main>
      {link && <LinkItem link={link} showComments={false} />}

      <h2 className="font-semibold text-2xl py-5">Comments</h2>
      <CommentList comments={link?.comments} />
    </main>
  );
}

export default LinkDetails;
