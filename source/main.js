import * as maps from './collections/maps.js';
import * as sets from './collections/sets.js';
import * as attribute from './decorators/attribute.js';
import * as component from './elements/component.js';
import * as number from './primitives/number.js';
import * as string from './primitives/string.js';
import * as animation from './utilities/animation.js';
import * as element from './utilities/element.js';

Object.assign(window, {
    ...maps,
    ...sets,
    ...attribute,
    ...component,
    ...number,
    ...string,
    ...animation,
    ...element
});