/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/
var majorityElement = function(num){
	var n = num.length;
	if(n==1) 
	{
		return num[0];
	}

	var els = new Object();
	for(var i = 0; i <n; i++)
	{
		var curr = num[i];
		if(els.hasOwnProperty(curr))
		{
			els[curr]++;
			if(els[curr]>n/2)
			{
				return curr;
			}
		}
		else
		{
			els[curr] = 1;
		}
	}
	return -1;
};
