let string = "";


let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  
  button.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.innerHTML == "=") {
      try {

        string = eval(string)
        
        
      }
      catch {
        string = "Syntax Errror"
      }
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "X") {  
      string = string + "*";  
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "÷") {  
      string = string + "/";  
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "DEL") {  
      string = string.slice(0, -1);  
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "AC") {
      string =""
      document.querySelector("input").value = string;
    }
    else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }

  })
});