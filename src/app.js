import './scss/base.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

require('materialize-css');

const lessons = [{
  name: "Поиск наименьшей выпуклой оболчки методом Грехэма",
  href: "1.html",
  difficulty: 1 // 0-2 means easy-difficult
}];

const menu_course_template = (e) => `
<li class="collection-item" id="c-item-li-${e.id}">
  <a class="menu-lesson-name" href="#!"><i class="material-icons">${['star_border', 'star_half', 'star'][e.difficulty]}</i>${e.name}</a>
</li>`;

const load_page = (x) => $("iframe").prop('src', `${window.location.origin}/${x}`);

$(document).ready(function () {
  M.AutoInit();

  load_page("blank.html");

  lessons.sort((x, y) => x.difficulty - y.difficulty).forEach(e => {
    e.id = Math.ceil(Math.random() * 100000);
    $("#slide-out").append(menu_course_template(e));
    $(`#c-item-li-${e.id}`).click(() => {
      load_page(e.href);
      if (window.innerWidth < 992) $('.sidenav').sidenav('close');
    });
  });
});