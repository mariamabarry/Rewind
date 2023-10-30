
/*CONTROLLER FUNCTION */
//get the values from the Page
function getInput()
{
    //get user input
    let inputStr = document.getElementById("inputStr").value;
    
    //reverse user input
    let outputStr = reverseStringMethod(inputStr);

    //display results
    displayReversed(outputStr);
}


/*LOGIC FUNCTIONS*/
//generate numbers from startValue to endValue
function reverseStringMethod (str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
  }
  
  function reverseStringArr(str) {
    let reversed = "";
    const l = str.length;
    for(let i = l-1; i >= 0; i--) {
      reversed = `${reversed}${str[i]}`;
    }
    return reversed;
  }
/* DISPLAY OR VIEW FUNCTIONS*/
//display the numbers with the even numbers being bold
function displayReversed(str){

    document.getElementById("outputStr").innerHTML = str;
}
