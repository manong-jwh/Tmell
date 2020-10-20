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


export { nav, navActive }