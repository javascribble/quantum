import { defineOverride } from '../utilities/components.js';
import { attachShadow } from '../utilities/shadow.js';

export default class FormComponent extends HTMLFormElement {
    constructor(template) {
        super();

        attachShadow(this, template);
    }
}

const formTag = 'form';
defineOverride(formTag, FormComponent, formTag);
