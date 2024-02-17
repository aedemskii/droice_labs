import React, { Component } from 'react';
import './styles/App.css';
import data from './data/demoData';
import getMousePosition from './utils/getMousePosition';
import Title from './components/Title/';
import Dendrogram from './components/Dendrogram/';
import Cursor from './components/Cursor/';

class App extends Component {

    mouseOverHandle = () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.add('visible');
    }

    mouseOutHandle = () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.remove('visible');
    }
    mouseMoveHandle = (e) => {
        const cursor = document.getElementById('cursor');
        const mousePosition = getMousePosition(e);
        cursor.style.top = `${mousePosition.top}px`;
        cursor.style.left = `${mousePosition.left}px`;
    }
    mouseDownHandle = () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.add('active');
    }
    mouseUpHandle = () => {
        const cursor = document.getElementById('cursor');
        cursor.classList.remove('active');
    }

    wheelHandler = (e) => {
        const cursor = document.getElementById('cursor');
        const mousePosition = getMousePosition(e);
        cursor.style.top = `${mousePosition.top}px`;
        cursor.style.left = `${mousePosition.left}px`;
    }

    render() {
        return (
            <div className='app'
                onMouseOver={this.mouseOverHandle}
                onMouseOut={this.mouseOutHandle}
                onMouseMove={this.mouseMoveHandle}
                onMouseDown={this.mouseDownHandle}
                onMouseUp={this.mouseUpHandle}
                onWheel={this.wheelHandler}
                >
                <Title title={'TREE DIAGRAM AI'} />
                <Dendrogram nodes={data.nodes} nodeSize={25} size={{width: 970, height: 500}}/>
                <Cursor />
            </div>
        )
    }
}

export default App
