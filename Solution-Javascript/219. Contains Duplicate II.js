/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-22T11:47:39-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-22T11:59:02-04:00
*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var result = []
    for(var i =0; i<nums.length; i++){
        if(result[nums[i]] == undefined)
            result[nums[i]] = i
        else{
            if(i-result[nums[i]] <= k){
                return true
            }else{
                result[nums[i]] = i
            }
        }
    }

    return false
};
