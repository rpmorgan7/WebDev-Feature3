const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createMentor = (mentor) => {
  return axios({
    method: "post",
    url: `${url}/mentors`,
    data: mentor,
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response.data);
      return response.data; // Return newly created mentor
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

export const getAllMentors = () => {
  return axios
    .get("./Services/mentors.json") // Fetch from local JSON
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
