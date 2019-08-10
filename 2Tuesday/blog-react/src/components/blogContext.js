import React, { useState } from 'react';


// Creating a Stateful Context
const blogContext = React.createContext([{}, () => {}]);

const BlogProvider = (props) => {
    const [state, setState] = useState([]);
    return (
        <blogContext.Provider value={[state, setState]}>
            {props.children}
        </blogContext.Provider>
    );
}


export { blogContext, BlogProvider };
