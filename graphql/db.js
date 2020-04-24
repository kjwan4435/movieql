import fetch from "node-fetch";

export let people = [
  {
    id: 1,
    name: "Wanzi",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Miyoung",
    age: 19,
    gender: "female",
  },
];
export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
export const addPeople = (name, age, gender) => {
  const newPeople = {
    id: people.length + 1,
    name,
    age,
    gender,
  };
  people.push(newPeople);
  return newPeople;
};
export const delPeople = (id) => {
  const filteredPeople = people.filter((person) => person.id !== id);
  if (people.length > filteredPeople.length) {
    people = filteredPeople;
    return true;
  } else {
    return false;
  }
};

export const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = () => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then((res) => {
      return res.json();
    })
    .then((json) => json.data.movies);
};
