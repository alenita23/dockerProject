export function randomPrice() {
   return Math.floor(Math.random() * 100) + 1;
};

export function randomPriceUpdated() {
   return Math.floor(Math.random() * 500) + 5;
};

export function createCheckinDate() {
   // return new Date().toLocaleDateString('en-CA');
   const dateobj = new Date();
   function pad(n) {return n < 10 ? "0"+n : n;}
   const result = dateobj.getFullYear()+"-"+pad(dateobj.getMonth()+1)+"-"+pad(dateobj.getDate());
   return result;
};

export function createCheckoutDate() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 3);
   function pad(n) {return n < 10 ? "0"+n : n;}
   let checkout = checkin.getFullYear()+"-"+pad(checkin.getMonth()+1)+"-"+pad(checkin.getDate());
   return checkout;
};

export function createCheckoutDateUpdated() {
   let checkin = new Date();
   checkin.setDate(checkin.getDate() + 7);
   function pad(n) {return n < 10 ? "0"+n : n;}
   let checkout = checkin.getFullYear()+"-"+pad(checkin.getMonth()+1)+"-"+pad(checkin.getDate());
   return checkout;
};