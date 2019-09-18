import React, { useRef, useState, useEffect } from 'react';

const DragItem: React.FC = (props) => {
    const { children } = props;
    return (
        <div>{children}</div>
    )
}
export default DragItem;
