let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 4000);
});

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

promise2
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
