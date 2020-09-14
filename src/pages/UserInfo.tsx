import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useRouteMatch } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

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
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      <a
        href={`https://news.ycombinator.com/user?id=${user?.id}`}
        className="font-medium text-2xl block my-5"
      >
        {user?.id}
      </a>
      <p className="text-md my-2">
        ... joined <strong>{user?.created}</strong>, and has{' '}
        <strong>{user?.karma}</strong> karma.
      </p>

      <div className="text-md">
        <a
          href={`https://news.ycombinator.com/submitted?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 text-blue-700 hover:underline"
        >
          submissions
        </a>
        /
        <a
          href={`https://news.ycombinator.com/threads?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 text-blue-700 hover:underline"
        >
          comments
        </a>
        /
        <a
          href={`https://news.ycombinator.com/favorites?id=${userName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 text-blue-700 hover:underline"
        >
          favorites
        </a>
      </div>
    </>
  );
}

export default UserInfo;
