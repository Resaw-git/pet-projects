document.getElementById(1).addEventListener('click', () => {
    let i = 0
    while (i <= 100) {
        let count = 0
        let j = 1
        while (j < i) {
            if (i % j == 0) count++
            j++
        }
        if (count == 1) console.log(i)
        i++
    }
})
