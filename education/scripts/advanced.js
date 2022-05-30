let id = 1

const card = document.querySelectorAll('.card')
     .forEach(el => {
        el.id = id++
        el.addEventListener('click', () => {
            document.location.href = `./pages/advanced_js${el.id}.html` 
        })
});
 






