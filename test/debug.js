import { Component, template, define } from '/source/main.js';

class Test extends Component {
    #label;

    constructor() {
        super();

        this.#label = this.shadowRoot.querySelector('div');
        this.#label.onclick = event => this.dispatchEvent(new Event('raise'));
    }

    static template = template('<div></div>');

    static get observedAttributes() { return ['test']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.#label.innerText = currentValue;
    }
}

define('quantum-test', Test);

const element = document.querySelector('quantum-test');
element.addEventListener('raise', console.log);
element.test = 'success';

document.body.style.visibility = 'visible';