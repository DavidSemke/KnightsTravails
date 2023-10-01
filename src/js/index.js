import "../css/style.css";
import { knight } from "./knight";
import { view } from "./view";

view.initialSetup();
view.showPath(knight.knightMoves);

/* Events fired on drag target */

document.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("dragTargetID", event.target.id);
});

/* Events fired on drop target */

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("dragenter", function (event) {
  const target = event.target;
  const classes = target.className.split(" ");

  // target should be drop target and have no children
  // (if target has child, target already contains drag target)
  if (classes.includes("dropTarget") && !target.hasChildNodes()) {
    if (classes.includes("cellDark")) {
      target.classList.add("cellDarkHover");
    } else if (classes.includes("cellLight")) {
      target.classList.add("cellLightHover");
    }
  }
});

document.addEventListener("dragleave", function (event) {
  const target = event.target;
  const classes = target.className.split(" ");

  if (classes.includes("dropTarget") && !target.hasChildNodes()) {
    target.classList.remove("cellDarkHover");
    target.classList.remove("cellLightHover");
  }
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  const target = event.target;
  const classes = target.className.split(" ");

  if (classes.includes("dropTarget") && !target.hasChildNodes()) {
    target.classList.remove("cellDarkHover");
    target.classList.remove("cellLightHover");

    const dragID = event.dataTransfer.getData("dragTargetID");
    const dragTarget = document.getElementById(dragID);

    // remove from old pos, add to new pos
    dragTarget.parentElement.removeChild(dragTarget);
    target.appendChild(dragTarget);

    // update view module variables
    if (dragID === "knight") {
      view.setKnightCell(target);
    } else if (dragID === "x") {
      view.setXCell(target);
    }

    view.showPath(knight.knightMoves);
  }
});

window.onresize = function () {
  view.showPath(knight.knightMoves);
};
