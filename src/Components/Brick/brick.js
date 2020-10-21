import React from 'react';
import './style.css';
const Brick =(props) => {
    console.log("Prop look like",props);
    return(
        <div className="brick-container">
            {props.name}
        </div>
    );
}
export default Brick;