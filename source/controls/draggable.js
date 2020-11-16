const dragStart = event => event.dataTransfer.setData('id', event.target.id);
const drag = event => { };
const dragEnd = event => { };

const dragEnter = event => { };
const dragOver = event => event.preventDefault();
const dragLeave = event => { };
const drop = event => {
    const element = event.target;
    const id = event.dataTransfer.getData('id');
    if (element.id !== id) {
        event.preventDefault();
        for (const source of document.querySelectorAll(`#${id}`)) {
            element.parentElement.insertBefore(source, element);
        }
    }

    // if (element.effectAllowed) {
    //     switch (dataTransfer.dropEffect) {
    //         case 'copy':
    //         case 'link':
    //         case 'move':
    //         default:
    //             if (dataTransfer.files.length) {
    //             } else {
    //             }

    //             break;
    //     }
    // }
};

export const enableDragDrop = element => {
    element.draggable = true;
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('drop', drop);
};

export const disableDragDrop = element => {
    element.draggable = false;
    element.removeEventListener('dragstart', dragStart);
    element.removeEventListener('dragover', dragOver);
    element.removeEventListener('drop', drop);
};