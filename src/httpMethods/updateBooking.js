import {endpoint} from "../util/variables";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export function updateBooking(body, headers) {
   return axios.put(`${endpoint}/booking/${bookingId}`, body, headers);
};