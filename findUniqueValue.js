// count Unique Value from sorted array.
// example : [1,1,1,1]   ans:1
// example: [1,2,3,4,7,7,7,7,8] ans:6
// example: [] ans:0


function findUniqueValue(arr) {
    let i = 0;
    let j = 1;
    if (arr.length == 0) {
        return 0;
    } else {
        while (j < arr.length) {
            if (arr[i] !== arr[j]) {
                arr[i + 1] = arr[j];
                i++;
                j++;
            } else {
                j++;
            }
        }
        return i+1 // i+1 because we strated from i=0
    }
}


findUniqueValue([1,2,3,3,4,5,7,7,7])