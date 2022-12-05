import {endpoint} from "../util/variables.js";
import axios from "axios"

export function createAuth(body, headers) {
   return axios.post(`${endpoint}/auth`, body, headers);
};