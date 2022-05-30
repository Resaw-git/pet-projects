let arr = []
let area = document.getElementsByClassName("area")[0]
let log = document.getElementsByClassName("history")[0]
let result = ""
let num1 = ""
let num2 = ""
let sign = ""


addEventListener("click", function(event) {
    if (event.target.classList.contains('btn')) {
        
        if (event.target.classList.contains('num')) {
            if (arr[0] == 0) {
                arr = []
            }
                arr.push(event.target.textContent)
        }

        if (event.target.textContent == "AC") {
            clearAll()
            arr[0] = 0
        }
        
        if (event.target.textContent == "DEL") {
            arr.pop()
        }
        
        if (event.target.classList.contains('oper')) {
            if (result != "") {
                arr = []
                arr[0] = result
                sign = event.target.textContent
            }

            arr.push(event.target.textContent)
            sign = event.target.textContent

        }

        if (event.target.classList.contains('eq')) {
            if (area.value.includes(sign) && result == "") {
                operation(sign)
                if (sign == "+") result = +num1 + +num2
                if (sign == "X") result = +num1 * +num2
                if (sign == "-") result = +num1 - +num2
                if (sign == "/") result = +num1 / +num2
                if (sign == "%") result = +num1 / 100
                console.log(result);
            }
        }

        area.value = arr.join("")
        if (result != "") {
            area.value = "=" + result
            log.innerHTML += `${arr.join("")}<br>${area.value}<br>`

        }
    }

    function clearAll() {
        result = 0
        num1 = 0
        num2 = 0
        arr = []
      }

    function operation (val) { 
        for (i=0; i<arr.length; i++) {
            if (arr[i] == val) {
                num1 = num2
                num2 = ""
                i++
            }
            num2 += arr[i]
        }
     }
})

