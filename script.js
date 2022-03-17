let spacebar = document.getElementById("spacebar")

function overIt(does) {
    if(does == true) {
        spacebar.style.width = "840px"
        spacebar.style.height = "320px"
        spacebar.transition = "width 0.75s ease-in-out, height 0.75s ease-in-out"
    } else {
        spacebar.style.width = "800px"
        spacebar.style.height = "300px"
        spacebar.transition = "width 0.75s ease-in-out, height 0.75s ease-in-out"
    }
}

function clickedIt(does) {
    if(does === true) {
        spacebar.style.top = "55%"
        spacebar.style.width = "800px"
        spacebar.style.height = "300px"
        spacebar.style.boxShadow = "0 35px 65px 0 rgba(86, 184, 149, 0.42)"
        spacebar.transition = "top 0.05s ease-in-out, width 0.05s ease-in-out, height 0.05s ease-in-out, box-shadow 0.05s ease-in-out"
    } else {
        spacebar.style.top = "50%"
        spacebar.style.width = "840px"
        spacebar.style.height = "320px"
        spacebar.style.boxShadow = "0 80px 40px 0 rgba(86, 184, 149, 0.42)"
        spacebar.transition = "top 0.75s ease-in-out, width 0.75s ease-in-out, height 0.75s ease-in-out, box-shadow 0.75s ease-in-out"
    }
}

spacebar.onmouseover = function() {overIt(true)}

spacebar.onmouseout = function() {overIt(false)}

spacebar.onmousedown = function() {clickedIt(true)}

spacebar.onmouseup = function() {clickedIt(false)}

