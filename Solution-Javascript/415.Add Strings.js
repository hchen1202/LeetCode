/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-20T15:34:28-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-20T16:12:05-04:00
*/



//Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

//Note:

//The length of both num1 and num2 is < 5100.
//Both num1 and num2 contains only digits 0-9.
//Both num1 and num2 does not contain any leading zero.
//You must not use any built-in BigInteger library or convert the inputs to integer directly.
//Subscribe to see which companies asked this question.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length-1;
    let j = num2.length-1;
    let add = 0;
    let ans = '';

    for(; i>=0 || j>=0; i--, j--){
        let a = i>=0 ? +num1[i] : 0;
        let b = j>=0 ? +num2[j] : 0;

        let sum = a+b+add
        add = ~~(sum/10)
        ans = sum%10+ans
    }

    add && (ans = add + ans)
    return ans
};

console.log(addStrings('1','1'))
