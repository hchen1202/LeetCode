/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-22T11:00:46-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-22T11:01:02-04:00
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a = []

    for(var i = 0; i<nums.length; i++){
        var temp = target - nums[i]
        if(a[temp] !== undefined)
            return [a[temp],i]
        a[nums[i]] = i
    }
};
