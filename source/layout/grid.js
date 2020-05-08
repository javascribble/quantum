import { Component } from '../extensions/component.js';
import { define } from '../utilities/elements.js';
import { contentSlot } from '../templates/content.js';

export default class Grid extends Component {
    constructor() {
        super();
    }
}

define('grid', Grid);