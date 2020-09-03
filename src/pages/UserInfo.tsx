import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useRouteMatch } from 'react-router-dom';

import '../styles/userInfo.css';

function UserInfo() {
  const match = useRouteMatch<any>();
  const userName = match.params.userName;

  useEffect(() => {
    document.title = `${userName} - Hacker News Reader`;
  }, [userName]);

  const { data: user, loading, error } = useFetch<any>(
    `https://api.hackerwebapp.com/user/${userName}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="userInfo">
      <h2 className="name">{user?.id}</h2>
      <p className="details">
        ... joined {user?.created}, and has {user?.karma} karma.
      </p>

      <p className="links">
        <a
          href={`https://news.ycombinator.com/submitted?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          submissions
        </a>
        /
        <a
          href={`https://news.ycombinator.com/threads?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          comments
        </a>
        /
        <a
          href={`https://news.ycombinator.com/favorites?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          favorites
        </a>
      </p>
    </div>
  );
}

export default UserInfo;
