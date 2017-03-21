/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-21T16:46:44-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-21T16:55:16-04:00
*/

//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var target = {
        '(': ')',
        '[':']',
        '{':'}'
    }
    var std = []

    for(var i = 0; i<s.length; i++){
        if(!std.length){
            std.push(s[i])
        }else{
            console.log(s[i] == target[std[std.length-1]])
            if(s[i] == target[std[std.length-1]]){
                std.pop()
                console.log(std)
            }else{
                std.push(s[i])
                console.log('here')
            }
        }
    }

    return !std.length
};


console.log(isValid('()'))
