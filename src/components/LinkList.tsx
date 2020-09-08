import React from 'react';
import { Link } from '../interfaces';
import LinkItem from './LinkItem';

type LinkListProps = {
  loading: boolean;
  error: Error | null;
  links: Link[] | null;
};

function LinkList({ loading, error, links }: LinkListProps) {
  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', color: 'red' }}>{error.message}</div>
    );
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
