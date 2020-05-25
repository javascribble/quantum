import { Component } from '../extensions/component.js';
import { clone, template } from '../utilities/templates.js';
import { define } from '../aliases/elements.js';

const sprite = template(`
<style>
    @keyframes play {
        100% {
            background-position: -150px
        }
    }
</style>
<div></div>
`);

export class Sprite extends Component {
    constructor() {
        const template = clone(sprite);
        const div = template.querySelector('div');

        super(template);

        const style = {
            width: '15px',
            height: '20px',
            background: `url('${this.getAttribute('url')}')`,
            animation: 'play 1s steps(10) infinite'
        };

        Object.assign(div.style, style);
    }
}

define('sprite-animation', Sprite);