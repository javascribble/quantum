import { Component } from "../elements/component";

const kebabType = (type) => type === Component ? 'component' : `${type.name.toLowerCase()}-${kebabType(type.prototype)}`;

export const define = (type) => customElements.define(kebabType(type), type);