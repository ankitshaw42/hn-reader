import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useRouteMatch } from 'react-router-dom';

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
    <>
      <h2>{user?.id}</h2>
      <p>
        ... joined {user?.created}, and has {user?.karma} karma.
      </p>

      <div>
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
      </div>
    </>
  );
}

export default UserInfo;
