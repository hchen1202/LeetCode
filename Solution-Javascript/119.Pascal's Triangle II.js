/*Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

var getRow = function(rowIndex) {
    var result = [];
	//init result array
	for(var i = 1; i <rowIndex+1 ; i++ ){
        result.push(0);
    }

    result[0] = 1;

    //calculate
    for (var i = 1; i <= rowIndex; i++) {
        result[i] = 1;
        for (var j = i - 1; j > 0; j--) {
        	result[j] = result[j] + result[j-1];
        }
    }

    return result;
};
