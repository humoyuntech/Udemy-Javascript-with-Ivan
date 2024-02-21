'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);

    if(!blockObj.id) throw new Error(`usbu nomerda ${i + 1} id yo'q.`)
    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});












