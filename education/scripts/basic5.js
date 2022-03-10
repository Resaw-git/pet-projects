const chessboard = document.getElementById('chessboard')
const table = document.createElement('table')
const tbody = document.createElement('tbody')
const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'J', 'H']

chessboard.appendChild(table)
table.appendChild(tbody)

for (let row=0; row<=8; row++) {
    const tr = document.createElement('tr')
    document.querySelector('tbody').appendChild(tr)
    for (let col=0; col<=8; col++) {
        const th = document.createElement('th')
        const td = document.createElement('td')
        if (row == 0) {
            document.querySelector('tr').appendChild(th)
            th.innerText = letters[col]
            th.style.width = "30px"
            th.style.textAlign = "center"
        } else {
            document.querySelectorAll('tr').forEach(el => {
                if (col == 0) {
                    el.appendChild(th)
                    th.innerText = 9 - row
                    th.style.height = "30px"
                    th.style.textAlign = "center"
                } else {
                    el.appendChild(td)
                    td.style.border = "1px solid"
                    if ((col - row) % 2 != 0) {
                        td.style.backgroundColor = "black"
                    }  
                }
            })
        }
    }
}