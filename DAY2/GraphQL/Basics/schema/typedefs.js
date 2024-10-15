export const typeDefs = `#graphql
type Query{
    hello:String
    courses:[Course]
    course(id:ID!):Course
    trainers:[Trainer]
    trainer(id:ID!):Trainer
}

type Course{
    id:ID
    title:String
    price:Int
    rating:Int
    likes:Int
    imageUrl:String
    trainer:Trainer
}
 type Trainer{
        id:ID!
        name:String!
        isMCT:Boolean
        avatarUrl:String
        followers:Int
    }
`;
// new Type Trainer -> Trainerid, name,isMCT,avatarUrl
// // type Query -> add -> trainers, trainer(id)

// rating , imageUrl , likes
