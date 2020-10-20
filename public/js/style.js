function nav(elem, elem1) {
    elem.on({
        mouseenter: () => {
            elem1.css('display', 'block')
        },
        mouseleave: () => {
            elem1.css('display', 'none')
        }
    })

}

function navActive(elem, elem1) {
    elem.mouseover(function() {
        $(this).addClass('nav-active').parent().siblings().children().removeClass('nav-active');
        elem1.children().addClass('nav-active');
    })
    elem.mouseout(function() {
        $(this).removeClass('nav-active')
        elem1.children().addClass('nav-active');
    })
}




function addXd(elem, elem1, elem2, elem3) {
    let mt = elem.offset().top;
    let rt = elem2.offset().top;
    let lt = elem3.offset().top;
    let $ls = elem.children().eq(8).nextAll('li');
    let lg = $('<i class="log">');
    let go1 = $('<i class="go1"><i class="go">0</i></i>');
    let me = $('<i class="me">');
    let sear = $('<i class="sear">');
    window.onscroll = () => {
        var t = document.documentElement.scrollTop;
        if (t >= mt) {
            elem.css({
                'margin': "0 auto",
                'width': "1047px",
                'line-height': '30px'
            })
            elem1.css({
                'z-index': 99999,
                'position': 'fixed',
            })
            $ls.each((i, elems) => {
                $(elems).hide()
            })
            elem.children('li').each((i, elems) => {
                $(elems).css({
                    padding: '0 17px',
                    "margin-top": '7px'
                })
            })
            elem.prepend(lg);
            elem.append(sear)
            elem.append(me)
            elem.append(go1)
                // elem.append(go)
        } else {
            elem.css({
                'margin-top': '110px',
                'width': "1090px",
                'line-height': '20px'
            })

            elem1.css({
                'position': 'static',
            })

            $ls.each((i, elems) => {
                $(elems).show()
            })
            elem.children('li').each((i, elems) => {
                $(elems).css({
                    padding: '0 26px',
                    "margin-top": '0'
                })
            })
            elem.children('li').eq(0).css({
                padding: 0
            })
            elem.children('li').eq(9).css({
                padding: 0
            })
            $('.log').remove();
            $(".sear").remove()
            $(".me").remove()
            $(".go1").remove()
        }

        if (t >= rt - 50) {

            elem2.css({
                position: 'fixed',
                top: '50px'
            })

        } else {
            elem2.css({
                position: 'absolute',
                top: '620px'
            })
        }
        if (t >= lt - 50) {

            elem3.css({
                position: 'fixed',
                top: '50px'
            })

        } else {
            elem3.css({
                position: 'absolute',
                top: '620px'
            })
        }
    }
}


//左右广告


export { nav, navActive, addXd }