import {token as bookingToken} from "../test/booking.test";
export const endpoint = "https://restful-booker.herokuapp.com";
export const login = "admin";
export const password = "password123";
export const userFirstName = "Elena";
export const userLastName = "Zaitsava";
export const additionalNeeds = "Tea";
export const additionalNeeds2 = "Free Wi-Fi";
export const content = { headers: {"Content-Type": "application/json", "Accept": "application/json"}};
export const contentWithToken = () => {
   return {
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Cookie": `token=${bookingToken}`,
     }
   };
};

