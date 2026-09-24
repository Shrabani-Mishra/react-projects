import { memo, useRef } from "react"

export const Counts=memo(()=>{
    const renderCount=useRef(0);
    return(
        <div>
            <p>Nothing changed here but i've now renders</p>
            <span>{renderCount.current++} times(s)</span>
        </div>
    );
});