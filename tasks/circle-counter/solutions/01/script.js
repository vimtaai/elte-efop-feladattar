const inputField = document.querySelector("input")
const outputField = document.querySelector("output")

function handleInput(){
  let result = 0;
  for(const c of inputField.value){
    if(c === "0" || c === "6" || c === "9"){
      result++
    }else if(c === "8"){
      result += 2
    }
  }
  outputField.value = result
}


inputField.addEventListener("input", handleInput)