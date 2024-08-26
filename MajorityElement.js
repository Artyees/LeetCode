// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109



/**
 * @param {number[]} nums
 * @return {number}
 */
// with hashmap
// var majorityElement = function (nums) {
//     let hashMap = new Map()
//     let highestValue = 0;
//     let highestElement;
//     for (let i = 0; i < nums.length; i++) {
//         if (!hashMap.has(`${nums[i]}`)) {
//             hashMap.set(`${nums[i]}`, 1)
//             if (highestValue == 0) {
//                 highestValue = 1;
//                 highestElement = nums[i]
//             }
//         }
//         else {
//             let lastVal = hashMap.get(`${nums[i]}`)
//             hashMap.set(`${nums[i]}`, ++lastVal)
//             if (highestValue < lastVal) {
//                 highestValue = lastVal;
//                 highestElement = nums[i]
//             }
//         }
//     }

//     console.log(hashMap)
//     console.log("highestValue : ", highestValue)
//     console.log("highestElement : ", highestElement)
// };

// with object
var majorityElement = function (nums) {
    let hashMap = {}
    let highestValue = 0;
    let highestElement;
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1
            if (highestValue == 0) {
                highestValue = 1;
                highestElement = nums[i]
            }
        }
        else {
            let lastVal = hashMap[nums[i]]
            hashMap[nums[i]] = ++lastVal
            if (highestValue < lastVal) {
                highestValue = lastVal;
                highestElement = nums[i]
            }
        }
    }

    console.log(hashMap)
    console.log("highestValue : ", highestValue)
    console.log("highestElement : ", highestElement)
};

majorityElement([2, 2, 1, 1, 1, 2, 2])
// majorityElement([3, 2, 3])



// BEST SOLUTION (NOT MINE)
// var majorityElement = function (nums) {
//     let count = 0;
//     for (let i of nums) {
//         if (count === 0) {
//             result = i;
//         }
//         if (i === result) {
//             count++;
//         } else {
//             count--;
//         }
//     }
//     console.log(result);

// };


