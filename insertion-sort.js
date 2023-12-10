function insertionSort(arr) {
  let len = arr.length;
  let j;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}
