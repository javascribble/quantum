import { Quantum } from '../source/elements/quantum.js';

import * as maps from '../source/collections/maps.js';
import * as sets from '../source/collections/sets.js';
import * as options from '../source/constants/options.js';
import * as element from '../source/decorators/element.js';
import * as templates from '../source/document/templates.js';
import * as resize from '../source/observers/resize.js';
import * as numbers from '../source/utilities/numbers.js';
import * as strings from '../source/utilities/strings.js';
import * as animation from '../source/window/animation.js';
import * as resources from '../source/window/resources.js';

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