import {randomPrice} from "../util/randomGenerator.js";
import {randomPriceUpdated} from "../util/randomGenerator.js";
import {createCheckinDate} from "../util/randomGenerator.js";
import {createCheckoutDate} from "../util/randomGenerator.js";
import {createCheckoutDateUpdated} from "../util/randomGenerator.js";

export const price = randomPrice();
export const priceUpdated = randomPriceUpdated();
export const checkin = createCheckinDate();
export const checkout = createCheckoutDate();
export const checkoutUpdated = createCheckoutDateUpdated();