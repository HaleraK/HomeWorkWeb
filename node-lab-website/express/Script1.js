// JavaScript source code

var count = 0;

function showAlert() {
    alert("gg");
}

function noHome() {
    for (let i = 0; i < 69; i++) {
        console.log("NO HOME!!!"+ i);
    }
    
}

function myAnimation() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            if (count) {
                elem.style.top = pos * 2 + "px";
                elem.style.left = pos + "px";
                count = !count;
            } else {
                elem.style.top = pos + "px";
                elem.style.left = pos * 2 + "px";
                count = !count;
            }
            
        }
    }
}