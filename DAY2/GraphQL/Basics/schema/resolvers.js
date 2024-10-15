const listofcourses = [
  { id: 1, title: "React", price: 5000 },
  { id: 2, title: "Redux", price: 3000 },
];
export const resolvers = {
  Query: {
    hello: () => "Hello GraphQL !",
    courses: () => {
      // come from db

      return listofcourses;
    },
    course: (_, { id }) => listofcourses.find(c => c.id == id),
  },
};
