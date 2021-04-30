import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b82352ae-fee6-4df6-9fe1-94b23f2607b5",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance
      .post(`follow/=${userId}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/=${userId}`)
      .then((response) => response.data);
  },
};
