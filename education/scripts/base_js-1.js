
document.getElementById(1).addEventListener('click', () => {
    let Tc = +prompt(`Введите температуру по Цельсию`)
    let Tf = (9 / 5) * Tc + 32
    alert('Температура по Фарингейту = ' + Tf.toFixed(1))
})

document.getElementById(2).addEventListener('click', () => {
    let admin, name
    name = "Василий"
    admin = name
    alert(admin)
})

document.getElementById(3).addEventListener('click', () => {
    alert(1000 + "108")
})
