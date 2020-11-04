import { Component } from './component.js';

export class Plugin extends Component {
    constructor(options) {
        super(options);
    }

    adapt(api) {
        const { adapter } = this.constructor;
        if (adapter) {
            for (const method in adapter) {
                api[method] = adapter[method].bind(this);
            }
        }
    }
}