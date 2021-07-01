import { gql } from "@apollo/client";

const FETCH_TAGS_QUERY = gql`
  query getPosts($limit: Int!, $page: Int!) {
    getPosts(limit: $limit, page: $page) {
      id
      score
      tag
    }
  }
`;

const FETCH_POSTS_QUERY = gql`
  query getPosts($limit: Int!, $page: Int!, $tag: String, $sortBy: String) {
    getPosts(limit: $limit, page: $page, tag: $tag, sortBy: $sortBy) {
      id
      tag
      createdAt
      body
      title
      image
      likes {
        createdAt
        username
        userID
      }
      creator {
        username
        userImage
      }
      likeCount
      viewCount
    }
  }
`;

const LIKE_POST_QUERY = gql`
  mutation likePost($userID: String!, $postID: ID!) {
    likePost(userID: $userID, postID: $postID) {
      id
      likes {
        createdAt
        username
        userID
      }
      likeCount
    }
  }
`;

module.exports = { FETCH_TAGS_QUERY, FETCH_POSTS_QUERY, LIKE_POST_QUERY };
