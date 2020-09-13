import React from 'react';
import Comment from './Comment';

interface CommentsProps {
  comments: any[];
}

function Comments({ comments }: CommentsProps) {
  console.log(comments);
  if (!comments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 mb-5 bg-white shadow-xs rounded-sm">
      <h3 className="font-semibold">{comments.length} comments</h3>

      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
