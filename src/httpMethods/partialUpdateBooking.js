import {endpoint} from "../util/variables";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export function partialUpdateBooking(body, headers) {
   return axios.patch(`${endpoint}/booking/${bookingId}`, body, headers);
};