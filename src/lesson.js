import $ from 'jquery';

window.$ = window.jQuery = $;
require('materialize-css');

window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$']
    ]
  },
  svg: {
    fontCache: 'global'
  }
};
require('mathjax/es5/tex-chtml-full');


$(document).ready(function () {
  M.AutoInit();
  const li = $('.lesson-img'),
    hli = $('.halfpage-lesson-img');
  li.tooltip();
  hli.tooltip();
  li.materialbox();
  hli.materialbox();
});