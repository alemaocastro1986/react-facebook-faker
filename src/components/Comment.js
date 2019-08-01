import React from "react";

// import { Container } from './styles';

export default function Comment({ comment }) {
  return (
    <li className="comment">
      <img
        className="comment-avatar"
        src={comment.author.avatar}
        alt={`${comment.author.name} avatar`}
      />
      <p className="comment-content">
        <b>{comment.author.name}</b> {comment.content}
      </p>
    </li>
  );
}
