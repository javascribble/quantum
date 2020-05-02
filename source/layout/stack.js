import Component from '../abstractions/component.js';
import { define } from '../utilities/elements.js';
import { contentSlot } from '../markup/content.js';

export default class StackComponent extends Component {
    constructor() {
        super(contentSlot);
    }
}

define('stack', StackComponent);