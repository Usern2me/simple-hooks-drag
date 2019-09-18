import { useState } from "react";

interface TPosition{
    dx: number,
    dy:number
}

function useOutContaienr(ref: React.RefObject<HTMLElement>, position: TPosition) {
    const [isOut, setIsOut] = useState(false)
    
}
export default useOutContaienr
