import "../css/style.css"
import { knight } from "./knight"
import { view } from "./view"


const controller = (() => {
    view.createBoard(8, 8)
    view.insertKnight()

    const knightIcon = document.querySelector('#knight')
    // knightIcon.draggable = true

    /* Events fired on drag target */

    document.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("dragTargetID", event.target.id);
        event.target.style.opacity = "0.5";
    });
    
    document.addEventListener("dragend", function(event) {
        event.dataTransfer.getData("dragTargetID")



        event.target.style.opacity = "1";
    });
    
    /* Events fired on drop target */
    
    // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    });
    
    document.addEventListener("drop", function(event) {
        event.preventDefault();
        if ( event.target.className == "dropTarget" ) {
            const data = event.dataTransfer.getData("dragTargetID");
            event.target.appendChild(document.getElementById(data));
        }
    });
    
    

})()






// const moves = knight.knightMoves([3,3],[4,3])
// view.showPath(moves)