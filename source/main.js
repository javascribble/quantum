import * as attribute from './decorators/attribute.js';
import * as component from './elements/component.js';
import * as number from './primitives/number.js';
import * as string from './primitives/string.js';
import * as animation from './utilities/animation.js';
import * as element from './utilities/element.js';

import './extensions/array.js';
import './extensions/map.js';
import './extensions/set.js';

Object.assign(window, attribute, component, number, string, animation, element);