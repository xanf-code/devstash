import { gql } from "@apollo/client";

const FETCH_TAGS_QUERY = gql`
  query getPosts($limit: Int!, $page: Int!) {
    getPosts(limit: $limit, page: $page) {
      posts {
        id
        score
        tag
      }
    }
  }
`;

const FETCH_POSTS_QUERY = gql`
  query getPosts($limit: Int!, $page: Int!, $tag: String, $sortBy: String) {
    getPosts(limit: $limit, page: $page, tag: $tag, sortBy: $sortBy) {
      hasNext
      posts {
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
        views {
          uuid
        }
        creator {
          username
          userImage
        }
        likeCount
        viewCount
      }
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

const TAGS_QUERY = gql`
  query getAllPosts {
    getAllPosts {
      id
      tag
      title
    }
  }
`;

const VIEW_POST_QUERY = gql`
  mutation addView($userID: String!, $postID: ID!) {
    addView(userID: $userID, postID: $postID) {
      id
      viewCount
    }
  }
`;

const ADD_BOOKMARKS = gql`
  mutation addBookmark($userID: String!, $postID: String!) {
    addBookmark(userID: $userID, postID: $postID) {
      id
      bookmarks {
        bookmark
      }
    }
  }
`;

const GET_BOOKED = gql`
  query getUser($userID: ID!) {
    getUser(userID: $userID) {
      name
      image
      bookmarks {
        name
        public
        bookmark
      }
    }
  }
`;

const FETCH_COLLECTION_QUERY = gql`
  query getBookmarksPosts($userID: ID!) {
    getBookmarksPosts(userID: $userID) {
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
      views {
          uuid
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

const RENAME_STASH = gql`
  mutation addStashName($userID: String!, $name: String!) {
    addStashName(userID: $userID, name: $name)
  }
`;

module.exports = {
  FETCH_TAGS_QUERY,
  FETCH_POSTS_QUERY,
  LIKE_POST_QUERY,
  TAGS_QUERY,
  VIEW_POST_QUERY,
  ADD_BOOKMARKS,
  GET_BOOKED,
  FETCH_COLLECTION_QUERY,
  RENAME_STASH,
};
