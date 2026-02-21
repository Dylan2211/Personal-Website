const position = {x:0, y:0}

interact('.draggable').draggable({
    listeners: {
        start (event) {},
        move (event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform = 
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})

let biggest_z_index = 0;
function highestZIndex() {
    biggest_z_index += 1;
    return biggest_z_index;
}