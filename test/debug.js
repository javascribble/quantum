import '/bundles/main-window.js';

const { persist, resizeObserver } = quantum;

class Test extends Quantum {
    text = this.shadowRoot.querySelector('textarea');
    label = this.shadowRoot.querySelector('div');

    constructor() {
        super();

        this.text.addEventListener('change', event => this.test = event.target.value);
    }

    static get observedAttributes() { return ['test']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.label.innerText = currentValue;
        super.attributeChangedCallback(attribute, previousValue, currentValue);
    }
}

Test.define('quantum-test', '<div></div><textarea></textarea>');

const element = document.querySelector('quantum-test');
element.text.addEventListener('resize', console.log);
resizeObserver.observe(element.text);
persist(element);

document.body.style.visibility = 'visible';