import {endpoint} from "../util/variables";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export function getBookingById(headers) {
   return axios.get(`${endpoint}/booking/${bookingId}`, headers);
};