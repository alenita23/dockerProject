import {endpoint} from "../util/variables.js";
import {bookingId} from "../test/booking.test.js";
import axios from "axios";

export function deleteBooking(headers) {
   return axios.delete(`${endpoint}/booking/${bookingId}`, headers);
};