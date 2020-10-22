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
var $jjsh = $('.jjsh');
var $jj = $('.a');
nav($jjsh, $jj)
    //导航吸顶
let $nau = $('.nav-side');
let $hid = $('.hidden');
let $right = $('.aside-right');
let $left = $('.aside-left');
let $a = $('.a')
addXd($nau, $hid, $right, $left, $a)

//右




import big from './fangda.js';
let $elem = $('.m2-1-1-1');
let $big = $('.fdj');
let $bingimg = $('.big');
let $bigdad = $('.bigdad');
big($elem, $big, $bigdad, $bingimg)



let $movImg = $('.m2-1-1-2 img');
let $bim = $('.bim');

import qie from './qietu.js'

qie($movImg, $bim, $bingimg)