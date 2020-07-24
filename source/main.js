import * as optionsConstants from './constants/options.js';
import * as elementDecorators from './decorators/element.js';
import * as componentExtensions from './extensions/component.js';
import * as formatFunctions from './functions/format.js';
import * as randomFunctions from './functions/random.js';
import * as animationUtilities from './utilities/animation.js';
import * as componentUtilities from './utilities/component.js';
import * as templateUtilities from './utilities/template.js';

window.quantum = {
    ...optionsConstants,
    ...elementDecorators,
    ...componentExtensions,
    ...formatFunctions,
    ...randomFunctions,
    ...animationUtilities,
    ...componentUtilities,
    ...templateUtilities
};

export * from './constants/options.js';
export * from './decorators/element.js';
export * from './extensions/component.js';
export * from './functions/format.js';
export * from './functions/random.js';
export * from './utilities/animation.js';
export * from './utilities/component.js';
export * from './utilities/template.js';