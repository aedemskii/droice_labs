import React, { Component } from 'react';

class Node extends Component {

    toggleCollapse = (e) => {
        const node = e.target;
        if ( node.classList.contains( 'collapsible' ) ) {
            this.props.toggleCollapse( node.getAttribute('id') );
        }
    }

    render() {
        const nodeData = this.props.data;
        let className = 'node';
        if (nodeData.collapsible) className += ' collapsible';
        if (nodeData.opened) className += ' opened';
        return (
            <div className='node-holder'>
                <div className='node-name-holder'>
                    <div className='node-name'>{nodeData.name}</div>
                </div>
                <div id={nodeData.id} className={className} onClick={this.toggleCollapse}></div>
            </div>
        )
    }
}

export default Node;
