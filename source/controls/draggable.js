const dragStart = event => {
    const element = event.target;
    const dataTransfer = event.dataTransfer;
    dataTransfer.setData('id', element.id);
    dataTransfer.setData('group', element.group);
};

const dragOver = event => event.preventDefault();

const drop = event => {
    const element = event.target;
    const dataTransfer = event.dataTransfer;
    const id = dataTransfer.getData('id');
    const group = dataTransfer.getData('group');
    if (id !== element.id && group === element.group) {
        event.preventDefault();
        for (const source of document.querySelectorAll(`#${id}`)) {
            source.parentElement.insertBefore(source, element);
        }
    }
};

export const enableDragDrop = selector => {
    for (const element of document.querySelectorAll(selector)) {
        element.draggable = true;
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragover', dragOver);
        element.addEventListener('drop', drop);
    }
};

export const disableDragDrop = selector => {
    for (const element of document.querySelectorAll(selector)) {
        element.draggable = false;
        element.removeEventListener('dragstart', dragStart);
        element.removeEventListener('dragover', dragOver);
        element.removeEventListener('drop', drop);
    }
};