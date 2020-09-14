import React from 'react';
import Comment from './Comment';
import { Comment as IComment } from '../interfaces';

interface CommentsProps {
  comments: IComment[];
}

function Comments({ comments }: CommentsProps) {
  const commentCount =
    comments.length > 0
      ? `${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`
      : 'No comments';

  return (
    <div className="p-4 mb-5 bg-white shadow-xs rounded-sm">
      <h3 className="font-semibold">{commentCount}</h3>

      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
