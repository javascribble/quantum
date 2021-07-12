import * as maps from './collections/maps.js';
import * as sets from './collections/sets.js';
import * as options from './constants/options.js';
import * as element from './decorators/element.js';
import * as templates from './document/templates.js';
import * as quantum from './elements/quantum.js';
import * as resize from './observers/resize.js';
import * as numbers from './utilities/numbers.js';
import * as strings from './utilities/strings.js';
import * as animation from './window/animation.js';
import * as resources from './window/resources.js';

window.Quantum = quantum.Quantum;
window.quantum = {
    ...maps,
    ...sets,
    ...options,
    ...element,
    ...templates,
    ...resize,
    ...numbers,
    ...strings,
    ...animation,
    ...resources
};

export * from './collections/maps.js';
export * from './collections/sets.js';
export * from './constants/options.js';
export * from './decorators/element.js';
export * from './document/templates.js';
export * from './elements/quantum.js';
export * from './observers/resize.js';
export * from './utilities/numbers.js';
export * from './utilities/strings.js';
export * from './window/animation.js';
export * from './window/resources.js';