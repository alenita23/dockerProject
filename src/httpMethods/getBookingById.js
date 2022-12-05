import {endpoint} from "../util/variables.js";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export function getBookingById(headers) {
   return axios.get(`${endpoint}/booking/${bookingId}`, headers);
};