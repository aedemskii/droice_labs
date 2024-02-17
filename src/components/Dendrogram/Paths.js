import React, { Component } from 'react';
import describeBezier from './utils/describeBezier';

class Paths extends Component {

    stroke = 'rgb(220, 220, 220)';
    strokeWidth = 2;
    minLeft = this.props.otherParentsPositions.reduce(
        ( min, pos ) => {
            return ( pos.left < min ) ? pos.left : min;
        }, 0
    );

    getSvgStyle = () => {
        const position = this.props.position;
        const otherParentsPositions = this.props.otherParentsPositions;
        const nodeSize = this.props.nodeSize;
        const halfNodeSize = Math.ceil( nodeSize / 2 );
        let className = '';
        if ( otherParentsPositions.length === 0 ) {
            className = ( position.top > 0 ) ? 'bottom' : 'top';
        }

        let minTop = 0, maxTop = position.top;
        otherParentsPositions.forEach(
            (pos) => {
                if ( pos.top < minTop ) minTop = pos.top;
                if ( pos.top > maxTop ) maxTop = pos.top;
            }
        )

        return {
            top: halfNodeSize - Math.max( 0, position.top ),
            left: nodeSize - position.left,
            width: position.left - nodeSize - this.minLeft,
            height: Math.abs( maxTop ),
            className: className
        }
    }

    calculatePaths = ( svgStyle ) => {
        const result = [];
        const position = this.props.position;

        const parentsPositions = this.props.otherParentsPositions.map(
            (pos) => {
                return { top: pos.top + this.strokeWidth / 2, left: pos.left }
            }
        );
        parentsPositions.push(
            {
                top: ( position.top > 0 ) ? 0 : svgStyle.height,
                left: 0
            }
        );

        parentsPositions.forEach(
            (pos) => {
                const start = {
                    top: pos.top,
                    left: pos.left
                };
                const end = {
                    top: Math.max( position.top, 0 ),
                    left: svgStyle.width + this.minLeft
                };
                result.push( describeBezier( start, end, svgStyle.width / 2 ) );
            }
        );
        return result;
    }



    render() {
        const svgStyle = this.getSvgStyle();
        const paths = [], beziers = this.calculatePaths( svgStyle );

        beziers.forEach(
            (bezier, idx) => {
                paths.push(
                    <path d={bezier} stroke={this.stroke}
                        strokeWidth={this.strokeWidth}
                        key={`${this.id}_${idx}`}
                        fill='transparent'
                        />
                    )
            }
        )

        return (
            <svg className={svgStyle.className} style={svgStyle}>
                {paths}
            </svg>
        )
    }
}

export default Paths;
