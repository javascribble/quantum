import { define, shadow, template, clone } from '../utilities/elements.js';

const html = template(`        
<style>
    @keyframes play {
        100% {
            background-position: -150px
        }
    }
</style>
<div></div>
`);

export class Sprite extends HTMLElement {
    constructor() {
        super();

        const style = {
            width: '15px',
            height: '20px',
            background: `url('${this.getAttribute('url')}')`,
            animation: 'play 1s steps(10) infinite'
        }

        const element = clone(html);
        const div = element.querySelector('div');
        Object.assign(div.style, style);

        const root = shadow(this);
        root.appendChild(element);
    }
}

define('sprite-animation', Sprite);