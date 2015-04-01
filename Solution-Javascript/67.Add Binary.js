/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/
/**
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
var addBinary = function(a, b) {
    var m = a.length; 
    var n = b.length;
    var temp = 0; var add = 0; 
    var result = '';
    
    for(var i=1; i<=Math.max(m,n);i++)
    {
        //from end to front
        indexa = m-i;
        indexb = n-i;
        if(indexa>=0 && indexb>=0)
        {
            temp = add + parseInt(a.charAt(indexa)) + parseInt(b.charAt(indexb));
        }
        else if(indexa<0)//if m<n
        {
            temp = add + parseInt(b.charAt(indexb));
        }
        else if(indexb<0)//if m>n
        {
            temp = add + parseInt(a.charAt(indexa));
        }
        
        if(temp >1)
        {
            add = 1;
            temp -=2;
        }
        else
        {
            add = 0;
        }
        result = temp + result;
    }
    if(add == 1)
    {
        result = add + result;
    }
    return result;
};
