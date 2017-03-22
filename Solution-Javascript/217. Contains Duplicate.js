/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-22T11:16:00-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-22T11:17:02-04:00
*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {}
    for(var i = 0; i<nums.length; i++){
        if(hash[nums[i]]) return true
        hash[nums[i]] = true
    }

    return false
};
