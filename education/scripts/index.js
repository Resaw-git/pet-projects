let id = 1

const card = document.querySelectorAll('.card')
     .forEach(el => {
        el.id = id++
        el.addEventListener('click', () => {
            document.location.href = `./basic_js${el.id}.html` 
        })
});
 






