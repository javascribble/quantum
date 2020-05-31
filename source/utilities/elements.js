import { Quantum } from "../elements/quantum";

const typeName = (type) => type.name.toLowerCase();

const typeKebab = (type) => type === Quantum ? typeName(type) : `${typeKebab(Object.getPrototypeOf(type))}-${typeName(type)}`;

export const define = (type) => customElements.define(typeKebab(type), type);