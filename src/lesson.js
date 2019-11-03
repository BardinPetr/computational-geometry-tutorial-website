import './scss/base.scss';

import $ from 'jquery';
window.$ = window.jQuery = $;

require('materialize-css');


$(document).ready(function () {
  const li = $('.lesson-img'),
    hli = $('.halfpage-lesson-img');
  li.tooltip();
  hli.tooltip();
  li.materialbox();
  hli.materialbox();
});

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.collapsible');
//   var instances = M.Collapsible.init(elems, options);
// });