/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    bg = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

adv.forEach(item => {
    item.remove();
});

genre.innerHTML = 'Драма';

bg.style.backgroundImage = 'url(img/bg.jpg)';

movieDB.movies.sort();

movieList.innerHTML = '';

movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
    <div class="delete"></div>
</li>`;
});