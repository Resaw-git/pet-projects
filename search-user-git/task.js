const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderEmptyResults = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderCount = count => {
  countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
      )}</span> результатов
  `;
};

const onSubmitStart = () => {
  countContainer.innerHTML = `Загрузка...`;
  resultsContainer.innerHTML = '';
  errorContainer.innerHTML = '';
};

function template(item) {
  const newElement = document.createElement('li');
  newElement.classList.add('search__finding-item');
  newElement.innerHTML = `
      <p class="search__finding-name">
          ${item.full_name}
      </p>
	`;
  return newElement;
}

async function onSubmit(event) {
  onSubmitStart()
  try {
    const response = await fetch('https://api.nomoreparties.co/github-search?q=' + event[0].value)
    const data = await response.json()
    if (data.total_count == 0) {
      renderEmptyResults()
    } else {
      renderCount(data.total_count)
      data.items.map(item => {
        resultsContainer.insertAdjacentElement('beforeend', template(item))
      })
    }
  } catch {
    renderError()
  }

}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  onSubmit(form)
})
