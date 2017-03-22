/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-22T12:59:29-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-22T13:02:15-04:00
*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var result = []

    for(var i = 0; i<nums.length; i++){
        for(var j = i +1 ; j<=Math.min(nums.length-1, k+i); j++){
            if (Math.abs(nums[i] - nums[j]) <= t)
                return true;
        }
    }

    return false
};
