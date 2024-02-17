function getNodeById( id, nodes ) {
    const len = nodes.length;
    for ( let i = 0; i < len; i++ ) {
        if ( nodes[i].id === id ) {
            return nodes[i];
        }
    }
}

export default getNodeById;
