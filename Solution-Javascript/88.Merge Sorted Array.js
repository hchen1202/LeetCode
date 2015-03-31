/*
Given two sorted integer arrays A and B, merge B into A as one sorted array.

Note:
You may assume that A has enough space (size that is greater or equal to m + n) to hold additional elements from B. The number of elements initialized in A and B are m and n respectively.
*/
var merge = function(A, m, B, n) {
    var index = 0;
 	for(var i = 0; i < B.length; i++){

 		while(B[i] > A[index] && index < A.length) {
 			index++;
 		}
		A.splice(index, 0, B[i]); //check splice api, first insert index, delete 0, add el
        
 	}
};
