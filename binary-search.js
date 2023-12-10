function binarySearch(arr, item) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2),
      element = arr[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
