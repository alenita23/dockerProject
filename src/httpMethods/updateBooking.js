import {endpoint} from "../util/variables.js";
import {bookingId} from "../test/booking.test.js";
import axios from "axios";

export function updateBooking(body, headers) {
   return axios.put(`${endpoint}/booking/${bookingId}`, body, headers);
};