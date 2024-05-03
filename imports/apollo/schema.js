const typeDefs = `#graphql
type Link {
_id: ID!
title: String
url: String
}

type Query {
getLink (id: ID!): Link
getLinks: [Link]
}`

export default typeDefs;
