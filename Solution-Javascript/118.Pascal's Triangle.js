/*Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
var generate = function(numRows) {
     if(numRows == 0) {
        return [];
    }
    if(numRows == 1) {
		return [[1]];
	}

	var result = [];
	var firstRow = [1];
	result.push(firstRow);

	for(var i = 1; i< numRows; i++){
		var row = [1]; // add first element
		var temp = result[i-1];
		var size = temp.length;

		for(var j = 1; j< size; j++){
			row.push(temp[j-1]+temp[j]);
		}

		row.push(1);
		result.push(row);
	}
	return result;
    
};
