function qieh(movImg, topImg, bigImg) {
    movImg.mouseover(function() {
        $(this).parent().addClass('z-active').parent().siblings().find('a').removeClass('z-active');
        let str = $(this).attr('src');
        topImg.attr('src', str);
        bigImg.attr('src', str)
    })
}



export default qieh;