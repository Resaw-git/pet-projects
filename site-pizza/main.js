let container = document.querySelectorAll('.container')
let modalFilter = document.querySelector('.filter')
let modalAdds = document.querySelector('.addition')
let btnAdds = document.querySelectorAll('.main__btn')
let options = document.querySelectorAll('.filter__category-item')

document.querySelector('.main__filter').addEventListener('click', toggleModal)
btnAdds.forEach(el => el.addEventListener('click', toggleModal2))
options.forEach(el => el.addEventListener('click', toggleModal3))
document.querySelector('.filter__close-btn').addEventListener('click', toggleModal)
document.querySelector('.addition__close-btn').addEventListener('click', toggleModal2)

function toggleModal() { 
    modalFilter.classList.toggle('is-open')
    container.forEach(el => el.classList.toggle('blur'))
 }

 function toggleModal2() { 
    modalAdds.classList.toggle('is-open')
    container.forEach(el => el.classList.toggle('blur'))
 }

function toggleModal3() { 
    this.classList.toggle('selected')
 }


addEventListener('click', (event) => {
    if (event.target == modalFilter) {
        toggleModal()
    }
    if (event.target == modalAdds) {
        toggleModal2()
    }
})