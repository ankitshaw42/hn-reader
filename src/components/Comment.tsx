import React from 'react';
import { Link } from 'react-router-dom';
import { Comment as IComment } from '../interfaces';

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div
      className="text-sm lg:text-base mt-2 pt-2 pb-4 border-t border-gray-300 leading-relaxed"
      key={comment.id}
    >
      <div className="pb-3">
        <Link
          to={`/user/${comment.user}`}
          className="text-blue-700 mr-2 hover:underline"
        >
          {comment.user}
        </Link>
        <span>{comment.time_ago}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>

      {/* display nested comments */}
      {comment.comments.length > 0 &&
        comment.comments.map((nestedComment: any) => (
          <div className="pl-3" key={nestedComment.id}>
            <Comment comment={nestedComment} />
          </div>
        ))}
    </div>
  );
}
