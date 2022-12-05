import {endpoint} from "../util/variables";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export function deleteBooking(headers) {
   return axios.delete(`${endpoint}/booking/${bookingId}`, headers);
};