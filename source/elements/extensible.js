const { load, presets } = quantum;

export class Extensible extends Quantum {
    extensions = new Map();

    constructor(options, preset) {
        super(options);

        for (const [name, extension] of presets.get(preset)) {
            this.extensions.set(name, extension(this));
        }
    }

    static get observedAttributes() { return ['src']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (currentValue) {
            load(currentValue).then(data => this.load(data));
        } else {
            this.unload();
        }
    }

    async load(data, bridge = {}) {
        for (const [name, extension] of this.extensions) {
            bridge[name] = await extension.load(bridge, data[name] || {});
        }
    }

    unload() {
        for (const extension of this.extensions.values()) {
            extension?.unload();
        }
    }
}

Quantum.Extensible = Extensible;