import {randomPrice} from "../util/randomGenerator";
import {randomPriceUpdated} from "../util/randomGenerator";
import {createCheckinDate} from "../util/randomGenerator";
import {createCheckoutDate} from "../util/randomGenerator";
import {createCheckoutDateUpdated} from "../util/randomGenerator";

export const price = randomPrice();
export const priceUpdated = randomPriceUpdated();
export const checkin = createCheckinDate();
export const checkout = createCheckoutDate();
export const checkoutUpdated = createCheckoutDateUpdated();