import { Quantum } from './elements/quantum.js';

import * as maps from './collections/maps.js';
import * as sets from './collections/sets.js';
import * as options from './constants/options.js';
import * as element from './decorators/element.js';
import * as templates from './document/templates.js';
import * as resize from './observers/resize.js';
import * as animation from './window/animation.js';
import * as resources from './window/resources.js';

import './extensions/array.js';
import './extensions/map.js';
import './extensions/set.js';

import './utilities/number.js';
import './utilities/string.js';

window.Quantum = Quantum;
window.quantum = {
    ...maps,
    ...sets,
    ...options,
    ...element,
    ...templates,
    ...resize,
    ...animation,
    ...resources
};