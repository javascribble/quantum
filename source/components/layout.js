import Component from '../abstractions/component.js';
import { define } from '../utilities/elements.js';

const template = document.createElement('template');
template.innerHTML = '<slot name="test" />';

export default class LayoutComponent extends Component {
    constructor() {
        super(template);
    }
}

define('layout', LayoutComponent);