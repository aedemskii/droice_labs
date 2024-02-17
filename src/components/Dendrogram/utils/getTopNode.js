function getTopNode( nodes ) {
    const len = nodes.length;
    for ( let i = 0; i < len; i++ ) {
        if ( nodes[i].topNode ) return nodes[i];
    }
    return nodes[0];
}

export default getTopNode;
