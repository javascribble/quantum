import { Quantum } from './elements/quantum.js';

import * as maps from './collections/maps.js';
import * as sets from './collections/sets.js';
import * as document from './decorators/document.js';
import * as element from './decorators/element.js';
import * as animation from './utilities/animation.js';
import * as primitives from './utilities/primitives.js';
import * as resources from './utilities/resources.js';

import './extensions/array.js';
import './extensions/map.js';
import './extensions/set.js';

window.Quantum = Quantum;
window.quantum = {
    ...maps,
    ...sets,
    ...document,
    ...element,
    ...animation,
    ...primitives,
    ...resources
}