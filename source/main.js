import * as optionsConstants from './constants/options.js';
import * as elementDecorators from './decorators/element.js';
import * as componentExtensions from './extensions/component.js';
import * as numberFunctions from './functions/number.js';
import * as stringFunctions from './functions/string.js';
import * as animationUtilities from './utilities/animation.js';
import * as componentUtilities from './utilities/component.js';
import * as templateUtilities from './utilities/template.js';

window.quantum = {
    ...optionsConstants,
    ...elementDecorators,
    ...componentExtensions,
    ...numberFunctions,
    ...stringFunctions,
    ...animationUtilities,
    ...componentUtilities,
    ...templateUtilities
};

export * from './constants/options.js';
export * from './decorators/element.js';
export * from './extensions/component.js';
export * from './functions/number.js';
export * from './functions/string.js';
export * from './utilities/animation.js';
export * from './utilities/component.js';
export * from './utilities/template.js';