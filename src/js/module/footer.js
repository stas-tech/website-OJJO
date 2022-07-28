var check1 = null;
var check2 = 0;
function radioClick(c) {
    if (check1 != c) {
        try {
            document.getElementById('footer__headline-icon_' + check1.value).style.transform = "rotate(0deg)";
        } catch {}
        check2 = 0;
        check1 = c
    }
    check2 ^= 1;
    c.checked = check2
    if(check2 ==1) {
        document.getElementById('footer__headline-icon_'+c.value).style.transform = "rotate(180deg)";
    }
    else {
        document.getElementById('footer__headline-icon_' + c.value).style.transform = "rotate(0deg)";
    }
}
window.radioClick = radioClick;