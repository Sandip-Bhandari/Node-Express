// Inversion of Control

function filter(array, filterFunction) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (filterFunction(element)) {
      newArray[newArray.length] = element;
    }
  }
  return newArray;
}

const array = [0, 1, undefined, 2, null, 3, "four", ""];
console.log(filter(array, (el) => el !== null && el !== undefined));

// [0, 1, 2, 3, 'four', '']
console.log(filter(array, (el) => el !== undefined));

// [0, 1, 2, null, 3, 'four', '']
console.log(filter(array, (el) => el !== null));

// [0, 1, 2, undefined, 3, 'four', '']
console.log(filter(array, (el) => el !== undefined && el !== null && el !== 0));

// [1, 2, 3, 'four', '']
console.log(
  filter(array, (el) => el !== undefined && el !== null && el !== "")
);

// [0, 1, 2, 3, 'four']
