import { Component } from "../elements/component";

const typeName = (type) => type.name.toLowerCase();

const typeKebab = (type) => type === Component ? typeName(type) : `${typeName(type)}-${typeKebab(Object.getPrototypeOf(type))}`;

export const define = (type) => customElements.define(typeKebab(type), type);