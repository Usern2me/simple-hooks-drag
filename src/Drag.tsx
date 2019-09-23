import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import useDrag from './hooks/useDrag';
import { calculateChildTop, arrayMove, arrayRemove } from './utils';

import './App.css';

const Drag: React.FC = (props) => {
    const { children } = props;
    const containerRef = useRef(null);
const [dropKey, setDropKey] = useState()
    useEffect(() => {
        console.log(calculateChildTop(containerRef));
        // console.log()
    }, [])
    const onMove = useCallback(
        () => {
            console.log('当前拖动的是',dropKey)
        },
        [dropKey],
    )
    return (
            <div className="dragContainer" ref={containerRef}>
                {children}
            </div>
    );
}

export { Drag };
