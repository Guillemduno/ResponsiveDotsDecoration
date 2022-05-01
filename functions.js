
// This function creates dots based on the quantity of dots, 
// color, size, and color of the border.
function createDots(numOfDots, divId, color, size, border=""){
    for (let index = 0; index < numOfDots; index++) {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.height = size;
        dot.style.width = size;
        dot.style.border = border;
        dot.style.backgroundColor = color;
        document.getElementById(divId).appendChild(dot);
    }
}

// This function creates a new wrap to hold the dots created.
function createWrapDots(id, clas, qttyDots, color, size, border){
    let wrap = document.createElement('div')
    wrap.setAttribute("id", id);
    wrap.classList.add(clas);
    wrap.style.height = size;
    document.body.appendChild(wrap);
    createDots(qttyDots, id, color, size, border);
}
