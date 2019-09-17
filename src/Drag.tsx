import React, { useRef, useState,useEffect} from 'react';
import useMouseDown from './hooks/useMouseDown';
import useDrag from './hooks/useDrag';

import './App.css';

const Drag: React.FC = (props) => {
    const { children } = props;
    const containerRef = useRef(null);
    // const isMouseDown = useMouseDown(containerRef);
    let { dx, dy } = useDrag(containerRef);
    console.log('ddd',dx,dy)
    return (
        <div className="dragContainer" ref={containerRef}>
            ---
            {/* <div>{isMouseDown?'yes':'no'}</div> */}
            ---
            {children}
        </div>
    );
}

export default Drag;
