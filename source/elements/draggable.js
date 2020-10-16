import { validateDrop } from '../utilities/draggables.js';
import { Component } from './component.js';

export class Draggable extends Component {
    constructor() {
        super();

        //this.effectAllowed

        if (!this.id) {
            this.id = `draggable-${quantum.randomString()}`;
        }

        if (!this.hasAttribute('group')) {
            this.setAttribute('group', 'any');
        }

        this.ondragstart = event => {
            const dataTransfer = event.dataTransfer;
            //dataTransfer.setDragImage(this.dragImage)
            dataTransfer.setData('id', this.id);
            dataTransfer.setData('group', this.group);
        }

        //this.ondrag = event => {};
        //this.ondragenter = event => {};
        this.ondragover = event => preventDefault(event);
        //this.ondragleave = event => {};
        //this.ondragend = event => {};
        //this.ondragstop = event => {};

        this.ondrop = event => {
            const dataTransfer = event.dataTransfer;
            const data = {
                id: dataTransfer.getData('id'),
                group: dataTransfer.getData('group')
            };

            if (validateDrop(data, this)) {
                preventDefault(event);
                const element = query(document, `#${data.id}`);
                this.appendChild(element);
            }

            switch (dataTransfer.dropEffect) {
                case 'copy':
                    break;
                case 'link':
                    break;
                case 'move':
                    break;
                default:
                    if (dataTransfer.files.length) {

                    } else {

                    }

                    break;
            }
        };
    }
}