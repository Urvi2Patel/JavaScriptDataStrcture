
// Write a balancedParenthesis function that takes a string as input and 
// returns a boolean — if the parentheses in the input string are ‘balanced’,
//  then return true, else return false. 
//  For example, the program should print true for exp = “[()]{}{[()()]()}” and false for exp = “[(])”



function CheckParam(str) {
    if (str !== "") {
        let arr = str.split("")
        let arr2 = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "(")
                arr2.push(")");
            else if (arr[i] === "{")
                arr2.push("}");
            else if (arr[i] === "[")
                arr2.push("]");
            else {
                var t = arr2.pop();
                if (t !== arr[i]) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return true;
    }
}
