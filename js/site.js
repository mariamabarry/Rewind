
/*CONTROLLER FUNCTION */
//get the values from the Page
function getInput()
{
    document.getElementById("alert").classList.add("invisible");

    //get user input
    let inputStr = document.getElementById("inputStr").value;
    
    //Validate input 
    if(!inputStr)
    {
      //display results
      displayString("", false);
    }
    else
    {
      //reverse user input
      let outputStr = reverseString(inputStr);
      //display results
      displayString(outputStr);
    }
}

/*LOGIC FUNCTIONS*/
//reverse input string
function reverseString (str) 
{
    return str.split('').reduce((reversed, character) => character + reversed, '')
}

/* DISPLAY OR VIEW FUNCTIONS*/
//display the reversed string
function displayString(revStr, isReversible = true)
{
  //clear styling on alert box
  document.getElementById("alert").classList.remove("alert-success", "alert-danger", "alert-warning", "alert-info");

  if(isReversible)
  {
    //write to page
    document.getElementById("alertHeading").innerHTML = `Success!`;
    document.getElementById("msg").innerHTML = `<strong>Your string reversed is: </strong><lead>${revStr}</lead>`;
    //style alert box
    document.getElementById("alert").classList.add("alert-success");
  }
  else
  {
    //write to page
    document.getElementById("alertHeading").innerHTML = `Error`;
    document.getElementById("msg").innerHTML = `Nothing to reverse! Please enter a string.`;
    //style alert box
    document.getElementById("alert").classList.add("alert-danger");
  }
  
  //show the alert box
  document.getElementById("alert").classList.remove("invisible");
  document.getElementById("alert").classList.add("show");
}
