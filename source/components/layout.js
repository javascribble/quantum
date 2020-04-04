import Element, { define } from '../element.js';

define('layout', class extends Element {
    constructor() {
        const container = document.createElement('div');
        container.innerHTML = 'hello world';

        super(container);
    }
});
