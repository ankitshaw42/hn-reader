import React from 'react';

import '../styles/linkItem.css';

import { Link } from 'react-router-dom';

import { Link as ILink } from '../interfaces/Link';

type LinkItemProps = {
  link: ILink;
};

const LinkItem = ({ link }: LinkItemProps) => {
  const { points, comments_count, url, title, domain, user, time_ago } = link;

  return (
    <li className="link-item">
      <span className="score">{points || 0}</span>

      <div className="content">
        <div className="url">
          <a
            className="title"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>

          <span className="domain">{domain}</span>
        </div>

        <div className="metadata">
          <span className="user">
            by <Link to={`/user/${user}`}>{user} </Link>
          </span>
          <span className="time">{time_ago} | </span>
          <a href="/" className="comments">
            {comments_count === 0
              ? 'no comments'
              : `${comments_count} comments`}
          </a>
        </div>
      </div>
    </li>
  );
};

export default LinkItem;
