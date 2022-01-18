import { render } from '@testing-library/react';
import React from 'react';

export const Scroll=(props)=>{
    return(
        <div style={{overflow:'scroll',border:'5px solid black',height:'800px'}}>
            {props.children}
        </div>
    );
}

 
