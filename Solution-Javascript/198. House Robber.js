/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-21T18:10:30-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-21T18:10:33-04:00
*/



/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-21T18:09:14-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-21T18:10:33-04:00
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var length = nums.length;

    if (length === 0) {
        return 0;
    } else if (length == 1) {
        return nums[0];
    }

    var opt = [];
    opt[0] = nums[0],
    opt[1] = Math.max(nums[0], nums[1]);

    for (var i = 2; i < length; i++) {
        opt[i] = Math.max(nums[i] + opt[i - 2], opt[i - 1]);
    }

    return opt[length - 1];
};
