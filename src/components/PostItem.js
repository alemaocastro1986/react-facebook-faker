import React from "react";
import Comment from "./Comment";

export default function PostItem({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={post.author.avatar} alt="Profile photo" />
        <div className="details">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>
      <div className="post-content">{post.content}</div>
      <hr className="divisor" />
      <ul className="post-comments">
        {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
