function heapSort(arr) {
  let len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return arr;
}

function heapify(arr, x, len) {
  let l = 2 * x + 1,
    r = 2 * x + 2,
    largest = x;
  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== x) {
    swap(arr, x, largest);
    heapify(arr, largest, len);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
