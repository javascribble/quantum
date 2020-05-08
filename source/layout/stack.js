import { Component } from '../extensions/component.js';
import { define } from '../utilities/elements.js';
import { contentSlot } from '../templates/content.js';

export default class Stack extends Component {
    constructor() {
        super();
    }
}

define('stack', Stack);