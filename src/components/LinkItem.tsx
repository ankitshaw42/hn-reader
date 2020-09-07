import React from 'react';

import { Link } from 'react-router-dom';

import { Link as ILink } from '../interfaces';

type LinkItemProps = {
  link: ILink;
  showComments?: boolean;
};

const LinkItem = ({ link, showComments = true }: LinkItemProps) => {
  const {
    points,
    comments_count,
    url,
    title,
    domain,
    user,
    time_ago,
    type,
    id,
  } = link;

  return (
    <li>
      {type !== 'job' && <span>{points || 0}</span>}

      <div>
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>

          <span>{domain}</span>
        </div>

        <div>
          {user && (
            <span>
              by <Link to={`/user/${user}`}>{user}</Link>
            </span>
          )}

          <span>{time_ago}</span>

          {type !== 'job' && showComments && (
            <a href={`/link/${id}`}>
              {comments_count === 0
                ? ' no comments'
                : ` ${comments_count} comments`}
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default LinkItem;
