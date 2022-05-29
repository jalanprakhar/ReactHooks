import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    //useEffect without a dependency array runs everytime while rendering
    //useEffect with an empty dependency array runs only the first time when a component is being rendered
    //useEffect with a dependency array runs when any one of the dependency is changed 
    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats (${count})`
        } else {
            document.title = `Chats`
        }
    }, [count])
    console.log('Hello outside')
    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <p>
                useEffect without a dependency array runs everytime while rendering
                <br />
                useEffect with an empty dependency array runs only the first time when a component is being rendered
                <br />
                useEffect with a dependency array runs the first timewhen any one of the dependency is changed
                <br />
            </p>
            <p>
            Cleanup Function :- React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time. We’ll discuss why this helps avoid bugs and how to opt out of this behavior in case it creates performance issues later below.
            </p>
            {count}
            <button onClick={handleClick}>click Me</button>
        </div>
    )
}

export default UseEffect
