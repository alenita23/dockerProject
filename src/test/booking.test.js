import {createAuth} from "../httpMethods/createAuth";
import {getAllBookings} from "../httpMethods/getAllBookings";
import {getBookingById} from "../httpMethods/getBookingById";
import {createBooking} from "../httpMethods/createBooking";
import * as bodies from "../bodies/bookingBody";
import {updateBooking} from "../httpMethods/updateBooking";
import {partialUpdateBooking} from "../httpMethods/partialUpdateBooking";
import {deleteBooking} from "../httpMethods/deleteBooking";
import {getDeletedBooking} from "../httpMethods/getDeletedBooking";
import * as variables from "../util/variables";
import * as requestData from "../bodies/preRequest";

export let token;
export let bookingId;


describe("pass the authorization step", () => {
   let authResponse;

   beforeAll( async () => {
      authResponse = await createAuth(bodies.createAuthBody, variables.content);
      console.log("authorization response is: ", authResponse.data);
   });

   afterAll( async() => {
      token = authResponse.data.token;
      console.log("token is: ", token);
   });

   test( "status code is 200", async () => {
      await expect(authResponse.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(authResponse.statusText).toEqual("OK");
   });
});

describe( "get all bookings", ()=>{
   let response;

   beforeAll( async () => {
      response = await getAllBookings();
      console.log("response:", response.data);
   });

   test( "status code is 200", async () => {
      await expect(response.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(response.statusText).toEqual("OK");
   });
});

describe("create a booking", () => {
   let bookingResponse;

   beforeAll(async() => {
      bookingResponse = await createBooking(bodies.createBookingBody, variables.content);
      console.log("bookingResponse is: ", bookingResponse.data);
   });

   afterAll(async () => {
      bookingId = bookingResponse.data.bookingid;
      console.log("response bookingId is: ", bookingId);
   });

   test("status code is 200", async () => {
      await expect(bookingResponse.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(bookingResponse.statusText).toEqual("OK");
   });

   test("checkin date is equal to the expected value", async () => {
      await expect(bookingResponse.data.booking.bookingdates.checkin).toEqual(requestData.checkin);
   });

   test("checkout date is equal to the expected value", async () => {
      await expect(bookingResponse.data.booking.bookingdates.checkout).toEqual(requestData.checkout);
   });

   test("price in response is equal generated value", async () => {
      await expect(bookingResponse.data.booking.totalprice).toEqual(requestData.price);
  });
});

describe("get booking by Id", () => {
   let response;

   beforeAll(async () => {
      response = await getBookingById(variables.content);
      console.log("My booking is: ", response.data);
   });

   test("status code is 200", async() => {
      await expect(response.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(response.statusText).toEqual("OK");
   });

   test("user first name is equal to the expected value", async() => {
      await expect(response.data.firstname).toEqual(variables.userFirstName);
   });

   test("user last name is equal to the expected value", async() => {
      await expect(response.data.lastname).toEqual(variables.userLastName);
   });

   test("checkin date is equal to the expected value", async () => {
      await expect(response.data.bookingdates.checkin).toEqual(requestData.checkin);
   });

   test("checkout date is equal to the expected value", async () => {
      await expect(response.data.bookingdates.checkout).toEqual(requestData.checkout);
   });

   test("price in response is equal to the generated value", async () => {
      await expect(response.data.totalprice).toEqual(requestData.price);
   });

   test("depositpaid is the same like in request", async () => {
      await expect(response.data.depositpaid).toEqual(false);
   });

   test("additional needs are equal to the expected value", async () => {
      await expect(response.data.additionalneeds).toEqual(variables.additionalNeeds);
   });

});

describe("update a booking", () => {
   let updatedResponse;

   beforeAll(async() => {
      updatedResponse = await updateBooking(bodies.updateBookingBody, variables.contentWithToken());
      console.log("updated response is: ", updatedResponse.data);
   });

   test("status code is 200", async () => {
      await expect(updatedResponse.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(updatedResponse.statusText).toEqual("OK");
   });

   test("checkout date is equal to the expected value", async () => {
      await expect(updatedResponse.data.bookingdates.checkout).toEqual(requestData.checkoutUpdated);
   });

   test("price in response is equal to the generated value", async () => {
      await expect(updatedResponse.data.totalprice).toEqual(requestData.priceUpdated);
  });
});

describe("partial update a booking", () => {
   let partialUpdatedResponse;

   beforeAll(async() => {
      partialUpdatedResponse = await partialUpdateBooking(bodies.partialUpdateBookingBody, variables.contentWithToken());
      console.log("partial updated response is: ", partialUpdatedResponse.data);
   });

   test("status code is 200", async () => {
      await expect(partialUpdatedResponse.status).toEqual(200);
   });

   test("status text is OK", async () => {
      await expect(partialUpdatedResponse.statusText).toEqual("OK");
   });

   test("depositpaid is the same like in request", async () => {
      await expect(partialUpdatedResponse.data.depositpaid).toEqual(true);
   });

   test("additional needs are equal to the expected value", async () => {
      await expect(partialUpdatedResponse.data.additionalneeds).toEqual(variables.additionalNeeds2);
   });
});

describe("delete booking", () => {
   let response;

   beforeAll(async() => {
      response = await deleteBooking(variables.contentWithToken());
      console.log("deleted booking response is: ", response.data);
   });

   test("status code is 201", async () => {
      await expect(response.status).toEqual(201);
   });

   test("status text is Created", async () => {
      await expect(response.statusText).toEqual("Created");
   });
});

describe("try to get deleted booking", () => {
   let response;

   beforeAll( async () => {
      try {
         response = await getDeletedBooking(variables.contentWithToken());
         console.log("response is:", response.data);
      } catch (err) {
         response = err.response;
         console.log("Error response is:", err.response.status, err.response.statusText);
      }
   });


   test("status code is 404", async () => {
      await expect(response.status).toEqual(404);
   });

   test("status text is Not Found", async () => {
      await expect(response.statusText).toEqual("Not Found");
   });
});