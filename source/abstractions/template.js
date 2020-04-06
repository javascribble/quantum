import { defineOverride } from '../utilities/components.js';

export default class TemplateComponent extends HTMLTemplateElement {
    constructor() {
        super();
    }
}

const templateTag = 'template';
defineOverride(templateTag, TemplateComponent, templateTag);