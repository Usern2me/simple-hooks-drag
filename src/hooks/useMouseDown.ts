import { useState, useEffect } from "react";

// 监听鼠标按下的操作
function useMouseDown(ref: React.RefObject<HTMLElement>) {
    const [isDown, setIsDown] = useState(false)
    useEffect(() => {
        const handleMouseDown = () => {
            setIsDown(true);
        }
        const handleMouseUp = () => {
            setIsDown(false);
        }
        if (ref.current) {
            ref.current.addEventListener('mousedown', handleMouseDown);
            ref.current.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mousedown', handleMouseDown);
                ref.current.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, []);
    return isDown;
}

export default useMouseDown;
