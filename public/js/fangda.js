function big(elem, fdj, big, bigImg) {
    elem.mouseover(function() {
        fdj.css('display', 'block');
        big.css('display', 'block')
    })
    elem.mouseout(function() {
        fdj.css('display', 'none');
        big.css('display', 'none')
    })
    elem.mousemove(function(e) {
        let x = e.pageX - elem.offset().left - fdj.width() / 2;
        let y = e.pageY - elem.offset().top - fdj.height() / 2;
        if (x < 0) {
            x = 0
        } else if (x > elem.width() - fdj.width()) {
            x = elem.width() - fdj.width()
        }
        if (y < 0) {
            y = 0
        } else if (y > elem.height() - fdj.height()) {
            y = elem.height() - fdj.height()
        }
        fdj.css({
            left: x + 'px',
            top: y + 'px'
        })
        let X = x / (elem.width() - fdj.width());
        let Y = y / (elem.height() - fdj.height());
        bigImg.css({
            left: -(bigImg.width() - big.width()) * X + 'px',
            top: -(bigImg.height() - big.height()) * Y + 'px'
        })
    })
}




export default big;