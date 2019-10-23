import './scss/base.scss';
import 'materialize-css';
import $ from "jquery";

const lessons = [
  {
    name: "11111111111111111111111111111111111111111111",
    href: "1.html",
    difficulty: 0
  },
  {
    name: "22222222222222222222222222222222222",
    href: "2.html",
    difficulty: 1
  },
  {
    name: "3333333333333333333333333",
    href: "3.html",
    difficulty: 2
  },
  {
    name: "11111111111111111111111111111111111111111111",
    href: "1.html",
    difficulty: 0
  },
  {
    name: "22222222222222222222222222222222222",
    href: "2.html",
    difficulty: 1
  },
  {
    name: "3333333333333333333333333",
    href: "3.html",
    difficulty: 2
  },
  {
    name: "11111111111111111111111111111111111111111111",
    href: "1.html",
    difficulty: 0
  },
  {
    name: "22222222222222222222222222222222222",
    href: "2.html",
    difficulty: 1
  },
  {
    name: "3333333333333333333333333",
    href: "3.html",
    difficulty: 2
  },
  {
    name: "11111111111111111111111111111111111111111111",
    href: "1.html",
    difficulty: 0
  },
  {
    name: "22222222222222222222222222222222222",
    href: "2.html",
    difficulty: 1
  },
  {
    name: "3333333333333333333333333",
    href: "3.html",
    difficulty: 2
  }
];

const menu_course_template = (e) => `
<li class="collection-item" id="c-item-li-${e.id}">
  <a class="menu-lesson-name" href="#!"><i class="material-icons">${['star_border', 'star_half', 'star'][e.difficulty]}</i>${e.name}</a>
</li>`;

$(document).ready(function () {
  M.AutoInit();

  const sidenav = M.Sidenav.getInstance($(".sidenav"));

  lessons.sort((x, y) => x.difficulty - y.difficulty).forEach(e => {
    e.id = Math.ceil(Math.random() * 100000);
    $("#slide-out").append(menu_course_template(e));
    $(`#c-item-li-${e.id}`).click(() => {
      $("iframe").prop('src', `${window.location.origin}/assets/pages/${e.href}`);
      if (window.innerWidth < 992) sidenav.close();
    });
  });
});
