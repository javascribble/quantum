import '/bundles/main-window.js';

const { resizeObserver } = quantum;

class Test extends Quantum {
    label = this.shadowRoot.querySelector('div');

    constructor() {
        super();

        const text = document.createElement('textarea');
        text.addEventListener('change', event => this.test = event.target.value);
        text.addEventListener('resize', console.log);

        resizeObserver.observe(text);

        this.template.slots.get('').onAdd = console.log;

        this.appendChild(text);
    }

    static get observedAttributes() { return ['test']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.label.innerText = currentValue;
    }
}

Test.define('quantum-test', '<div></div><slot></slot>');

document.body.style.visibility = 'visible';