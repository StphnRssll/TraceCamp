import React from 'react' import { tsPropertySignature } from '@babel/types';

function One(){
    return <div>{tsPropertySignature.number}</div>
}

function Two(){

}

function Pass(){ //pass is a name context api 
    return(
        <h1></h1>
    )
}