import React, { useState } from 'react';

// where your context is
function List() {

    const blogContext = React.createContext();

    const blogProvider = (props) => {
        return (
            <blogContext.Provider value={}>
                {props.children}
            </blogContext.Provider>
        );
    }
export { blogContext, blogProvider };

// Creating a Stateful Context
    const blogContext = React.createContext([{}, () => {}]);

    const 
    return (
        <div className="Title">
          <h1>{title}</h1>
        </div>


        

        /*<div>
          <p>{body}</p>
        </div>*/
      );
}

export default List;