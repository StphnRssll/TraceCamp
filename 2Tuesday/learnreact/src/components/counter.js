import React, { useState, useEffect } from 'react';

function Counter(){
    const [Number, setNumber] = useState(100);

    function addClick(){
        const newNumber = Math.pow(Number + 1,1);
        setNumber(newNumber);
    }
    function subClick(){
        const newNumber = Math.pow(Number - 1,1);
        setNumber(newNumber);
    }
    
    function downCounter(){
        while(Number>0){
            const newNumber = Number - 1;
            setNumber(newNumber);
        }
    }
    useEffect(() => {
        document.title = `${Number}`;
    });

    return (
        <div>
            {downCounter}
            {useEffect}
            <h1>{Number}</h1>
            <button onClick={addClick}>Add One</button>
            <button onClick={subClick}>Sub One</button>
        </div>
    )
}

export default Counter