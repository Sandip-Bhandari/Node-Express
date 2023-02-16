/*
let Burger = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("preparing burger");
  }, 2000);
});

Burger.then((data) => {
  console.log(data); // preparing burger
  return "Added Buns";
})
  .then((data) => {
    console.log(data); // Added buns
    return "Adding patty";
  })
  .then((data) => {
    console.log(data);
  });
*/

let Burger = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("preparing burger");
  }, 2000);
});

let Addbuns = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Buns added");
  }, 4000);
});

let Addpatty = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("patty added");
  }, 6000);
});

Burger.then((data) => {
  console.log(data);
  return Addbuns;
})
  .then((data) => {
    console.log(data);
    return Addpatty;
  })
  .then((data) => {
    console.log(data);
  })
  .finally((data) => {
    setTimeout(() => {
      console.log("prepared");
    }, 2000);
  });
