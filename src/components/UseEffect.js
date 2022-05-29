import React, { useEffect, useState } from 'react'
import useTitleCount from '../hooks/useTitleCount';

function UseEffect() {
    const [count, setCount] = useState(0);
    useTitleCount(count);
    console.log('Hello outside')
    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            {count}
            <button onClick={handleClick}>click Me</button>
        </div>
    )
}

export default UseEffect