// Write a function called sumZero which accepts sorted array of integers. 
// The function should find first pair where the sum is zero. Return an array 
// where that includes both values that sum to zero or undefined if pair does not 
// exist.
function sumZero(arr) {
    let left = 0;let sum;
    let right = arr.length - 1;
    while(left < right) {
        sum = arr[left] + arr[right];
        if(sum == 0) {
            return (arr[left],arr[right])
        } else if(sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}