import * as variable from "../util/variables.js";
import * as preRequest from "./preRequest.js";

export const createAuthBody= {
    "username" : variable.login,
    "password" : variable.password
 }

export const createBookingBody = {
    firstname : variable.userFirstName,
    lastname : variable.userLastName,
    totalprice : preRequest.price,
    depositpaid : false,
    bookingdates :
        {
            checkin : preRequest.checkin,
            checkout : preRequest.checkout
        },
    additionalneeds : variable.additionalNeeds
}

export const updateBookingBody = {
    firstname : variable.userFirstName,
    lastname : variable.userLastName,
    totalprice : preRequest.priceUpdated,
    depositpaid : false,
    bookingdates :
        {
            checkin : preRequest.checkin,
            checkout : preRequest.checkoutUpdated
        },
    additionalneeds : variable.additionalNeeds
}

export const partialUpdateBookingBody = {
    "depositpaid" : true,
    "additionalneeds" : variable.additionalNeeds2
 };