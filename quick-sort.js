function quickSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let pivot = arr[0],
    left = [],
    right = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
