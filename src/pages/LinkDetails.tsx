import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import LinkItem from '../components/LinkItem';
import useFetch from '../hooks/useFetch';
import CommentList from '../components/CommentList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function LinkDetails() {
  const match = useRouteMatch<any>();
  const { linkId } = match.params;

  const { data: link, loading, error } = useFetch<any>(
    `https://api.hackerwebapp.com/item/${linkId}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <main>
      {link && <LinkItem link={link} showComments={false} />}

      <h2 className="font-semibold text-2xl py-5">Comments</h2>
      {link?.comments && <CommentList comments={link?.comments} />}
    </main>
  );
}
