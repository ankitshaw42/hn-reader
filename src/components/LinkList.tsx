import React from 'react';
import { Link } from '../interfaces';
import LinkItem from './LinkItem';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

interface LinkListProps {
  loading: boolean;
  error: Error | null;
  links: Link[] | null;
}

function LinkList({ loading, error, links }: LinkListProps) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <ul>
      {links?.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </ul>
  );
}

export default LinkList;
