// Given an unsorted array of n integers that can contain integers from 1 to n. 
// Some elements can be repeated multiple times and some other elements can be absent 
// from the array. Count the frequency of all elements that are present


function countFrequency(arr) {
    var obj = {}
    for(let x of arr) {
        obj[x] ? obj[x] = obj[x] + 1 : obj[x] = 1 ;
    }
    return obj
}
countFrequency([1,2,4,5,6,1,2])