import {endpoint} from "../util/variables.js";
import axios from "axios";

export function getAllBookings() {
   return axios.get(`${endpoint}/booking`);
};