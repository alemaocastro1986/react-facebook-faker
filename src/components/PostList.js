import React, { Component } from "react";

// import { Container } from './styles';

import PostItem from "./PostItem";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Philip Byrd",
          avatar: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "isaías jensen",
              avatar: "https://randomuser.me/api/portraits/men/34.jpg"
            },
            content: "Cara pelo que eu estava sabendo sim."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Shawn King",
          avatar: "https://randomuser.me/api/portraits/men/9.jpg"
        },
        date: "05 Jun 2019",
        content: "Pessoal, algume sabe a data da próxima turma do Bootcamp?",
        comments: [
          {
            id: 3,
            author: {
              name: "Sheila Diaz",
              avatar: "https://randomuser.me/api/portraits/women/31.jpg"
            },
            content:
              "Parece que já iniciou uma turma nova, quando irá abrir outra ainda não sei."
          },
          {
            id: 4,
            author: {
              name: "Regina Lee",
              avatar: "https://randomuser.me/api/portraits/women/9.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    );
  }
}
