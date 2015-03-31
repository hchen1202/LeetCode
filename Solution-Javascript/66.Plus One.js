//Given a non-negative number represented as an array of digits, plus one to the number.

//The digits are stored such that the most significant digit is at the head of the list.

var plusOne = function(digits) {
    var n = digits.length;
    var q = n-1;
	if (digits[q]!==9){
	    digits[q]++;
	}else{
	    while(digits[q]==9 & q > 0){
	        digits[q] = 0;
	        q--;
	    }
	    digits[q]++;
	    if(digits[0] === 10){
			//expand array
			digits[0] = 1;
			digits.push(0);
		}
	}
	return digits;
};
