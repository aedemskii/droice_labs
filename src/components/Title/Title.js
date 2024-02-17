import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <div className='title'>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default Title;
