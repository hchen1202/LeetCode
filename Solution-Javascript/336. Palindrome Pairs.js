/**
* @Author: Hao Chen <clovemac>
* @Date:   2017-03-20T22:28:44-04:00
* @Email:  hao@genm.co
* @Project: GenmMobile
* @Last modified by:   clovemac
* @Last modified time: 2017-03-21T01:47:29-04:00
*/



//Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

//Example 1:
//Given words = ["bat", "tab", "cat"]
//Return [[0, 1], [1, 0]]
//The palindromes are ["battab", "tabbat"]
//Example 2:
//Given words = ["abcd", "dcba", "lls", "s", "sssll"]
//Return [[0, 1], [1, 0], [3, 2], [2, 4]]
//The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]


/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {

    var len = words.length

    var result = []

    for(var i = 0; i<len; i++){
        var str = '';
        var item = words[i];
        var j = 0;

        do{

            var index = words.indexOf(str)

            if(index === -1 || index === i){
                str = item[j++] + str;
                continue;
            }

            var _str = item.substring(j);

            if (!isPalindrome(_str)) {
                str = item[j++] + str;
                continue;
            }

            //console.log(index)

            result.push([i, index])


            str = item[j++] + str;

        } while(j< item.length)
    }

    for(var i = 0; i<len; i++){
        var item = words[i];

        var str = '';

        var j = item.length - 1;

        do{
            let index = words.indexOf(str)

            if(index=== -1 || index=== i){
                str = str + item[j--];
                continue;
            }

            var _str = item.substring(0,j+1);


            if (!isPalindrome(_str)) {
                str = str + item[j--];
                continue;
            }

            result.push([index, i])

            str = str + item[j--];
        }while(j>=-1)

    }

    function isPalindrome(str){
        return str == str.split('').reverse().join('')
    }

    return result;
}


console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]))
