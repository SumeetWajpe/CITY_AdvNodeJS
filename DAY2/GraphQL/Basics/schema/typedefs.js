export const typeDefs = `#graphql
type Query{
    hello:String
    courses:[Course]
    course(id:ID!):Course
}

type Course{
    id:ID
    title:String
    price:Int
}
`;
