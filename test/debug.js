import { Component } from '/source/main.js';

class Test extends Component {
    #label;

    constructor() {
        super();

        this.#label = this.shadowRoot.querySelector('div');
        this.#label.onclick = event => this.dispatchEvent(new Event('raise'));
    }

    static template = document.querySelector('#quantum-test');

    static attributes = ['test'];

    testChangedCallback(value) {
        this.#label.innerText = value;
    }
}

customElements.define('quantum-test', Test);

const element = document.querySelector('quantum-test');
element.addEventListener('raise', console.log);
element.test = 'success';