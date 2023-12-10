function selectionSort(arr) {
  let len = arr.length;
  let min;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
