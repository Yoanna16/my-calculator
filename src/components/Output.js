import React from 'react'; 
import OutputRow from './OutputRow';

const Output = (props) => {

    return(
        <div>
           <OutputRow value={props.answer} textSize={{fontSize: '30px'}}/>
           <OutputRow value={props.user}/>
        </div>
    )
}

export default Output;

