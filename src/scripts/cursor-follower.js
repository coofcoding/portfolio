document.addEventListener("mousemove", function (e) {    
    console.log(e)
    document.querySelector('#_cursorFollows').style.transform = `translate(calc(${e.layerX}px - 200px), calc(${e.layerY}px - 180px))`;
    document.querySelector('#_pointerTexture').style.transform = `translate(calc(${e.layerX}px - 50%), calc(${e.layerY}px - 50%))`;
});