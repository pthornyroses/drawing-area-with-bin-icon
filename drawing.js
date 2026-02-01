const svg= document.getElementById("drawingArea");
const clearButton= document.getElementById("clearButton");
let drawing= false;
let line= null;

function getMousePosition(event){
    const rect = svg.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
svg.addEventListener("mousedown", (event) =>{
    drawing= true;
    const pos = getMousePosition(event);

    line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("points", `${pos.x},${pos.y}`);
    line.setAttribute("stroke", "deeppink");
    line.setAttribute("stroke-width", "3");
    line.setAttribute("fill", "none");
    svg.appendChild(line);
});
svg.addEventListener("mousemove", (event) =>{
    if (!drawing){
        return;
    }
    const pos = getMousePosition(event);
    let points = line.getAttribute("points");
    line.setAttribute("points", points + ` ${pos.x},${pos.y}`);
});
window.addEventListener("mouseup", () =>{
    drawing = false;
    line = null;
});
clearButton.addEventListener("click", () =>{
    svg.innerHTML = "";
});
