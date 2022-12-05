import {endpoint} from "../util/variables.js";
import {bookingId} from "../test/booking.test.js";
import axios from "axios";

export function partialUpdateBooking(body, headers) {
   return axios.patch(`${endpoint}/booking/${bookingId}`, body, headers);
};