import '/source/main.js';

class Test extends Quantum {
    #label;

    constructor() {
        super();

        this.#label = this.shadowRoot.querySelector('div');
        this.#label.onclick = event => this.dispatchEvent(new Event('raise'));
    }

    static get observedAttributes() { return ['test']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.#label.innerText = currentValue;
    }
}

Test.define('quantum-test', '<div></div>');

const element = document.querySelector('quantum-test');
element.addEventListener('raise', console.log);
element.test = 'success';

console.log(Quantum.Test);

document.body.style.visibility = 'visible';