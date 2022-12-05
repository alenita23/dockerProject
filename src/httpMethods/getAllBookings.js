import {endpoint} from "../util/variables";
import axios from "axios";

export function getAllBookings() {
   return axios.get(`${endpoint}/booking`);
};