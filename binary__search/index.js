let arr = [-1, 0, 3, 5, 7, 9, 12];

let search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    let mid;

    while(left <= right) {
        mid = Math.round((right - left)/2) + left;

        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return "Did not found this element"
}


function recursiveBinarySearch(array, item, start, end) {
   let middle = Math.floor((start - end) / 2 )
   if(item === array[middle]) {
       return middle
   }
   if(item < array[middle]) {
       return recursiveBinarySearch(array, item, start, middle - 1)
   } else {
      return recursiveBinarySearch(array, item, middle + 1, end)
   }
}


// console.log(search(arr, 12));
console.log(recursiveBinarySearch(arr, 12, 0, arr.length));

