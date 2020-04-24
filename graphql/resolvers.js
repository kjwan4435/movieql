import { people, getById, addPeople, delPeople, getMovies } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPeople(name, age, gender),
    delPerson: (_, { id }) => delPeople(id),
  },
};

export default resolvers;
