export function randomPrice() {
   return Math.floor(Math.random() * 100) + 1;
};

export function randomPriceUpdated() {
   return Math.floor(Math.random() * 500) + 5;
};

export function createCheckinDate() {
   return new Date().toLocaleDateString('en-ca');
};

export function createCheckoutDate() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 3);
   let checkout = checkin.toLocaleDateString('en-ca');
   return checkout;
};

export function createCheckoutDateUpdated() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 7);
   let checkout = checkin.toLocaleDateString('en-ca');
   return checkout;
};