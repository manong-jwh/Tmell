import { nav, navActive, addXd } from './style.js';
var $qycg = $('.qycg');
var $three = $('.three');
var $khfw = $('.khfw');
var $four = $('.four');
var $app = $('.app');
var $down = $('.app .down');
var $nav_active = $('.nav-side a');
var $par = $('a.nav-active').parent();
nav($qycg, $three);
nav($khfw, $four);
nav($app, $down);
navActive($nav_active, $par);


//导航吸顶
let $nau = $('.nav-side');
let $hid = $('.hidden');
let $right = $('.aside-right');
let $left = $('.aside-left');

addXd($nau, $hid, $right, $left)

//右