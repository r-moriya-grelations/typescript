window.addEventListener('load',(event)=> {
    let p = document.querySelector('#target')
    p!.textContent = row
  })

let hisName : string;
hisName = "tanaka"

console.log(hisName)

let num1 = 2
let num2 = 2
let row : string = ""

for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    let str: string = ""
    if(num1 <= j && j <= num2) {
      str += "△"
    } else {
      str += ""
    }
    row += str
  }
  if(i < 2) {
    num1--
    num2++
  } else {
    num1++
    num2--
  }
  row += "\r\n"
}