function compare(arr1, arr2) {
  // assumes same number of elements
  for (let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
}

function includesArray(sourceArray, searchElement) {
  // assumes same number of elements
  for (let index = 0; index < sourceArray.length; index += 1) {
    if (compare(sourceArray[index], searchElement)) return true;
  }
  return false;
}

export { compare, includesArray }