import React, { useRef, useState, useEffect, useMemo, createContext, useContext } from 'react';
import useDrag from './hooks/useDrag';
import { transformItem } from './utils';

const DragItem: React.FC = (props) => {
    const { children } = props;
    const childRef = useRef(null);
    const { dx, dy, isDrag } = useDrag(childRef);
    useEffect(() => {
        isDrag && transformItem(childRef.current as any, dx, dy);
        return () => {
            transformItem(childRef.current as any)
        };
    }, [dx, dy, isDrag])
    useMemo(() => {
    }, [isDrag])
    return (
        <div ref={childRef}>{children}</div>
    )
}
export default DragItem;
