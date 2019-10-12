import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import useDrag from './hooks/useDrag';
import { calculateChildTop, transformItem, arrayMove, arrayRemove } from './utils';

import './App.css';

const Drag: React.FC = (props) => {
    const { children } = props;
    const containerRef = useRef(null);
    // let moveRef = useRef(null);
    const [moveRef, useMoveRef] = useState(null)
    const [dropKey, setDropKey] = useState('0')
    // const { dx, dy, isDrag } = useDrag(moveRef);

    useEffect(() => {
        // console.log(calculateChildTop(containerRef));
        console.log(children)
    })
    // useEffect(() => {
    //     isDrag && transformItem(moveRef.current as any, dx, dy);
    //     return () => {
    //         transformItem(moveRef.current as any)
    //     };
    // }, [dx, dy, isDrag])

    // isDrag刷新的时候重新调用计算
    useMemo(() => {
    }, [isDrag])

    const onMove = useCallback(
        (str) => {
            console.log('当前拖动的是', dropKey, str)
        },
        [dropKey],
    )
    // 按下时移动对应的dragItem
    const handleMouseDown = (e: React.MouseEvent) => {
        console.log('aaa', e.target)
    }
    const handleMouseUp = (e: React.MouseEvent) => {
        moveRef = null;
    }
    return (
        <div
            className="dragContainer"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}>
            {children}
        </div>
    );
}

export { Drag };
