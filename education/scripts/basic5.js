const modal = document.querySelector('.modal-body')
const table = document.createElement('table')
const tbody = document.createElement('tbody')

document.querySelector('.modal-body').appendChild(table)
document.querySelector('table').appendChild(tbody)
const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'J', 'H']
let numbers = 9

for (let row=0; row<=8; row++) {
    let tr = document.createElement('tr')
    document.querySelector('tbody').appendChild(tr)
    for (let col=0; col<=8; col++) {
        let th = document.createElement('th')
        let td = document.createElement('td')
        /* isBlack++ */
        if (row == 0) {
            document.querySelector('tr').appendChild(th)
            th.innerText = letters[col]
            th.style.padding = ".5em"
            th.style.textAlign = "center"
        } else {
            document.querySelectorAll('tr').forEach(el => {
                if (col == 0) {
                    el.appendChild(th)
                    th.innerText = numbers - row
                    th.style.padding = ".5em"
                } else {
                    el.appendChild(td)
                    td.style.border = "1px solid"
                    td.style.width = "5em"
                    td.style.height = "5em"
                    td.style.textAlign = "center"
                    if ((col - row) % 2 != 0) {
                        td.style.backgroundColor = "black"
                    }  
                }
            })
        }
    }
}

