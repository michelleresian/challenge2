//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    //let testbrackets = testbrackets1;
    let testbrackets = document.getElementById("bracketsInput").value;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalancedB(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `<h2 style="margin-top: 20px;">Brackets are balanced ==> ${testbrackets}</h2>`;
    } else {
        msg = `<h2 style="margin-top: 20px;">Brackets are NOT balanced ==> ${testbrackets}</h2>`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {

    // Declare and initialize an arr called stack to hold open the brackets
    // Loop over the string 
    // if the current character is an open bracket, add it to the arr
    // if the current character is a close bracket, remove the last open char from the arr
    // compare is the last open bracket is of the same type of bracket as the close bracket
    // if false, return false as brackets are not balanced
    // if true, go to the next character and repeat
    // after looping over each charavter, if the arr is empty return true else false 

    let stack = []

    for (let i=0; i < brackets.length; i++){
        let item = brackets[i]
        if (item == '(' || item == '[' || item == '{'){
            stack.push(item)
            continue 
        }else if (item == ')' || item == ']' || item == '}'){
            if (stack.length == 0) return false 

            let check = stack.pop();
            switch(item) {
                case ')' :
                    if (check !== '(') return false 
                    break 
                case ']' :
                    if (check !== '[') return false
                    break 
                case '}' :
                    if (check !== '{') return false 
                    break 
            } 
        }
    }

   return stack.length === 0;

}


function isBalancedB(brackets){
    let stack = []

    let openBrackets = ['(', '{', '[']
    let closedBrackets = [')', '}', ']']
    let balancedBrackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    }

    for (let i=0; i < brackets.length ; i++){
        let item = brackets[i]

        if (openBrackets.includes(item)){
            stack.push(item)
            continue 
        }else if (closedBrackets.includes(item)){
            
            if(stack.length == 0) return false 

            check = stack.pop()

            if(balancedBrackets[check] !== item) return false 
        }
    }

    return stack.length === 0;
}