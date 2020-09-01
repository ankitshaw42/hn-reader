import React from 'react';

import './linkitem.css';

const LinkItem = ({ link }) => {
  return (
    <li className="link-item">
      <span className="score">{link.points || 0}</span>

      <div className="content">
        <div className="url">
          <a
            className="title"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>

          <span className="domain">{link.domain}</span>
        </div>

        <div className="metadata">
          <span className="user">
            by <a href="/user">{link.user} </a>
          </span>
          <span className="time">{link.time_ago} | </span>
          <a href="/" className="comments">
            {link.comments_count === 0
              ? 'no comments'
              : `${link.comments_count} comments`}
          </a>
        </div>
      </div>
    </li>
  );
};

export default LinkItem;
