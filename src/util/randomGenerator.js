export function randomPrice() {
   return Math.floor(Math.random() * 100) + 1;
};

export function randomPriceUpdated() {
   return Math.floor(Math.random() * 500) + 5;
};

export function createCheckinDate() {
   return new Date().toLocaleDateString('en-CA');
};

export function createCheckoutDate() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 3);
   let checkout = checkin.toLocaleDateString('en-CA');
   return checkout;
};

export function createCheckoutDateUpdated() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 7);
   let checkout = checkin.toLocaleDateString('en-CA');
   return checkout;
};