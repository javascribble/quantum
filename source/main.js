import { Quantum } from './elements/quantum.js';

import * as maps from './collections/maps.js';
import * as sets from './collections/sets.js';
import * as options from './constants/options.js';
import * as element from './decorators/element.js';
import * as templates from './document/templates.js';
import * as resize from './observers/resize.js';
import * as numbers from './utilities/numbers.js';
import * as strings from './utilities/strings.js';
import * as animation from './window/animation.js';
import * as resources from './window/resources.js';

window.Quantum = Quantum;
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

export default Quantum;

export * from maps;
export * from sets;
export * from options;
export * from element;
export * from templates;
export * from resize;
export * from numbers;
export * from strings;
export * from animation;
export * from resources;