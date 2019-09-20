import React, { useRef, useState, useEffect } from 'react';
import useDrag from './hooks/useDrag';

import './App.css';

const Drag: React.FC = (props) => {
    const { children } = props;
    const containerRef = useRef(null);
    let { dx, dy } = useDrag(containerRef);
    console.log('drag--->', dx, dy)
    return (
        <div className="dragContainer" ref={containerRef}>
            {children}
        </div>
    );
}

export default Drag;
