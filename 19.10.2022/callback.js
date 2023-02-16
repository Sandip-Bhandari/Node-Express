function burger(cb) {
  console.log("Preparing burger");
  cb(addPatty);
  console.log("Burger prepared");
}

function addBuns(Patty) {
  console.log("Adding Buns");
  Patty();
}

function addPatty() {
  console.log("Adding Patty");
}

burger(addBuns);
