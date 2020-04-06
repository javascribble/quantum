import { defineOverride } from '../utilities/components.js';
import { attachShadow } from '../utilities/shadow.js';

export default class ImageComponent extends HTMLImageElement {
    constructor(template) {
        super();

        attachShadow(this, template);
    }

    static get observedAttributes() {
        return ['disabled'];
    }

    get enabled() {
        return !this.hasAttribute('disabled');
    }

    connectedCallback() {
        //Added to DOM.
    }

    disconnectedCallback() {
        //Removed from DOM.
    }

    attributeChangedCallback(name, previousValue, currentValue) {
        //Called when an observed attribute (observableAttributes) is added/removed/updated/replaced.
    }

    adoptedCallback() {
        //Moved into a new document via adoptNode().
    }
}

defineOverride('image', ImageComponent, 'img');
