const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

Draggable.create(child, {
  type: "x",
  // edgeResistance: 1,
  bounds: {
    minX: -(child.offsetWidth - parent.offsetWidth),
    maxX: 0,
  },
});
