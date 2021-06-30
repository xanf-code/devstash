import { gql } from "@apollo/client"

const FETCH_TAGS_QUERY = gql`
{
 getPosts(limit:15 page:1){
     tag
     }
 }
 `

module.exports = { FETCH_TAGS_QUERY }