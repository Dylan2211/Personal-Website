interact(".page").draggable({
  listeners: {
    start(event) {},
    move(event) {
      const target = event.target;
      const x = (parseFloat(target.dataset.x) || 0) + event.dx;
      const y = (parseFloat(target.dataset.y) || 0) + event.dy;
      event.target.style.transform = `translate(${x}px, ${y}px)`;
      target.dataset.x = x;
      target.dataset.y = y;
    },
  },
});

const pages = document.getElementsByClassName("page");
for (const page of pages) {
  page.addEventListener("mousedown", (event) => {
    const el = event.currentTarget;

    el.style.zIndex = highestZIndex();
    console.log("Zindex", getComputedStyle(el).zIndex);
  });
}

// TODO
let biggest_z_index = 0;
function highestZIndex() {
  biggest_z_index += 1;
  return biggest_z_index;
}
