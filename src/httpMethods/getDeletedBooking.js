import {endpoint} from "../util/variables";
import {bookingId} from "../test/booking.test";
import axios from "axios";

export async function getDeletedBooking(headers) {
   return axios.get(`${endpoint}/booking/${bookingId}`, headers);
};