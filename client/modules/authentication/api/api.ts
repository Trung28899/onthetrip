import axios from "axios";
import AuthTypes from "../types/AuthTypes";

function authenticateUser(values: AuthTypes) {
  return axios.post("/api/auth", values);
}

export { authenticateUser };
