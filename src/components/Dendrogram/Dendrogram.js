import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getNodeById from './utils/getNodeById';
import getTopNode from './utils/getTopNode';
import Node from './Node';
import Paths from './Paths';

class Dendrogram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.props.nodes,
            size: this.props.size
        }
    }

    cssTransformDuration = 400;

    toggleCollapse = ( nodeId ) => {
        const nodes = [ ...this.state.nodes ];
        const currentNode = {};
        const len = nodes.length;
        for ( let i = 0; i < len; i++ ) {
            const node = nodes[i];
            if ( node.id === nodeId ) {
                currentNode.data = { ...node, opened: !node.opened };
                currentNode.idx = i;
                break;
            }
        }
        nodes[ currentNode.idx ] = currentNode.data;
        this.setState({ nodes });
    }

    render() {
        const nodes = [ ...this.state.nodes ];
        const renderNode = ( nodeData, parentNodeId ) => {
            const otherParentsIds = nodeData.otherParentsIds || [];
            if ( ( otherParentsIds || [] ).indexOf( parentNodeId ) + 1 ) return null;

            const otherParentsPositions = [];
            if ( parentNodeId ) {
                const firstParentPosition = getNodeById( parentNodeId, nodes ).position;
                otherParentsIds.forEach(
                    ( id ) => {
                        const pos = getNodeById( id, nodes ).position;
                        otherParentsPositions.push({
                            top: pos.top - firstParentPosition.top,
                            left: pos.left - firstParentPosition.left
                        });
                    }
                );
            }

            let childNodes;
            if ( nodeData.childNodes && nodeData.opened ) {
                childNodes = nodeData.childNodes.map(
                    (nodeId, idx) => {
                        return renderNode( getNodeById( nodeId, nodes ), nodeData.id );
                    }
                );
            }
            return (
                <div className='branch' key={nodeData.id} style={nodeData.position}>
                    <ReactCSSTransitionGroup
                        transitionName="smooth"
                        transitionEnterTimeout={this.cssTransformDuration}
                        transitionLeaveTimeout={this.cssTransformDuration}
                        >
                        {childNodes}
                    </ReactCSSTransitionGroup>
                    { parentNodeId ?
                        <Paths id={nodeData.id}
                            position={nodeData.position}
                            otherParentsPositions={otherParentsPositions}
                            nodeSize={this.props.nodeSize}
                            />
                        :
                        null
                    }
                    <Node data={nodeData} toggleCollapse={this.toggleCollapse} />
                </div>
            )
        }
        return(
            <div className='dendrogram' style={this.state.size}>
                {renderNode( getTopNode( this.state.nodes ) )}
            </div>
        );
    }
}

export default Dendrogram;
