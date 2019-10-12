import React, { useRef, useState, useEffect, useMemo, createContext, useContext } from 'react';

/**
 * 只负责展示
 */
const DragItem: React.FC = (props) => {
    const { children } = props;
    const childRef = useRef(null)
    return (
        <div {...props} ref={childRef}>{children}</div>
    )
}
export default DragItem;
