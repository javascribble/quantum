import '/bundles/main-window.js';

const { resizeObserver } = quantum;

class Test extends Quantum {
    text = this.shadowRoot.querySelector('textarea');
    label = this.shadowRoot.querySelector('div');

    constructor() {
        super();

        resizeObserver.observe(this.text);

        this.text.addEventListener('change', event => this.test = event.target.value);
        this.text.addEventListener('resize', console.log);
    }

    static get observedAttributes() { return ['test']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        this.label.innerText = currentValue;
        super.attributeChangedCallback(attribute, previousValue, currentValue);
    }
}

Test.define('quantum-test', '<div></div><textarea></textarea>');

document.body.style.visibility = 'visible';