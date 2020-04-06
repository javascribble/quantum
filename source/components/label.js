import { define } from '../utilities/components.js';
import Component from '../abstractions/element.js';

const template = document.createElement('template');
template.innerHTML = '<div>Hello World!</div>';

export default class LabelComponent extends Component {
    constructor() {
        super(template);
    }
};

define('label', LabelComponent);
