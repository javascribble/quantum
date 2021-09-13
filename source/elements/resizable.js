import { resizeObserver } from '../observers/resize.js';
import { Quantum } from './quantum.js';

export class Resizable extends Quantum {
    constructor(options) {
        super(options);

        this.addEventListener('resize', this.resize.bind(this));
    }

    connectedCallback() {
        resizeObserver.observe(this);
    }

    disconnectedCallback() {
        resizeObserver.unobserve(this);
    }
}

Quantum.Resizable = Resizable;