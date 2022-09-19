let arr = [-1, 0, 3, 5, 7, 9, 12];
// console.log(arr.length);

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

console.log(search(arr, 12));