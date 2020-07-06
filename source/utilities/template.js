export const html = (strings, ...expressions) => {
    const template = document.createElement('template');
    template.innerHTML = strings[0];
    return template;

    // shadow.appendChild(template.content.cloneNode(true));
    // for (const slot of shadow.querySelectorAll('slot')) {
    //     let previousElements = [];
    //     slot.addEventListener('slotchange', event => {
    //         const currentElements = slot.assignedElements();
    //         currentElements.subtract(previousElements).forEach(this?.addElement);
    //         previousElements.subtract(currentElements).forEach(this?.removeElement);
    //         previousElements = currentElements;
    //     });
    // }

    // this.#renderers = attributes.map(entry => [entry[0], entry[1](shadow)]);
    // events.forEach(entry => entry[1](shadow, options => this.dispatchEvent(new CustomEvent(entry[0], options))));

    // return () => template.content.cloneNode(true);
};