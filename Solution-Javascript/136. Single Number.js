/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-21T23:31:02-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-21T23:31:09-04:00
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ans = 0;
    for(var i = 0, len = nums.length; i < len; i++)
        ans ^= nums[i];

    return ans;
};
