export const serialize = element => {
    const attributes = Object.fromEntries(element.constructor.observedAttributes?.map(attribute => [attribute, element[attribute]]) || []);
    const children = element.slots.values().flat().filter(child => child.id).map((child => child.id));
    return { id: element.id, children, attributes };
};

export const deserialze = state => {
    const { id, children, attributes } = state;
    const element = document.querySelector(`#${id}`);
    Object.assign(element, attributes);
    for (const child of children) {
        element.appendChild(document.querySelector(`#${child}`));
    }
};