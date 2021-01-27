import * as element from './decorators/element.js';
import * as component from './elements/component.js';
import * as number from './primitives/number.js';
import * as string from './primitives/string.js';
import * as animation from './utilities/animation.js';
import * as resources from './utilities/resources.js';
import * as templates from './utilities/templates.js';

import './extensions/array.js';
import './extensions/map.js';
import './extensions/set.js';

window.quantum = {
    ...element,
    ...component,
    ...number,
    ...string,
    ...animation,
    ...resources,
    ...templates
};