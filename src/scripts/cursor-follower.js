document.addEventListener("mousemove", function (e) {    
    document.querySelector('#_cursorFollows').style.transform = `translate(calc(${e.clientX}px - 200px), calc(${e.clientY}px - 180px))`;
    document.querySelector('#_pointerTexture').style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
});