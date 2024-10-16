const listofcourses = [
  {
    id: 1,
    title: "React",
    price: 5000,
    likes: 400,
    rating: 5,
    imageUrl:
      "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    trainerId: 1,
  },
  {
    id: 2,
    title: "Redux",
    price: 4000,
    likes: 600,
    rating: 5,
    imageUrl: "https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg",
    trainerId: 2,
  },
  {
    id: 3,
    title: "Node",
    price: 6000,
    likes: 900,
    rating: 4,
    imageUrl:
      "https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
    trainerId: 1,
  },
  {
    id: 4,
    title: "Angular",
    price: 5000,
    likes: 200,
    rating: 3,
    imageUrl:
      "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png",
    trainerId: 3,
  },
  {
    id: 5,
    title: "Flutter",
    price: 7000,
    likes: 700,
    rating: 4,
    imageUrl: "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
    trainerId: 3,
  },
];
const trainerList = [
  {
    id: 1,
    name: "John Carter",
    isMCT: true,
    followers: 100,
    avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
  },
  {
    id: 2,
    name: "John Mojombo",
    isMCT: true,
    followers: 700,
    avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4",
  },
  {
    id: 3,
    name: "Allen Defunkt",
    isMCT: true,
    followers: 400,
    avatarUrl: "https://avatars.githubusercontent.com/u/3?v=4",
  },
];

export const resolvers = {
  Query: {
    hello: () => "Hello GraphQL !",
    courses: () => {
      // come from db

      return listofcourses;
    },
    course: (_, { id }) => listofcourses.find(c => c.id == id),
    trainers: () => trainerList,
    trainer: (_, args) => trainerList.find(trainer => trainer.id == args.id),
  },
  Course: {
    trainer: parent => {
      console.log(parent);
      return trainerList.find(t => t.id == parent.trainerId);
    },
  },
  Mutation: {
    createTrainer: (_, { id, name, isMCT, followers, avatarUrl }) => {
      let newTrainer = { id, name, isMCT, followers, avatarUrl };
      trainerList.push(newTrainer);
      return newTrainer;
    },
    deleteTrainer: (_, { id }) => {
      let theIndex = trainerList.findIndex(t => t.id == id);

      let deletedTrainerArr = trainerList.splice(theIndex, 1);
      return deletedTrainerArr[0];
    },
    createCourse: (_, { newcourse }) => {
      console.log(newcourse);
      listofcourses.push(newcourse);
      return newcourse;
    },
  },
};
