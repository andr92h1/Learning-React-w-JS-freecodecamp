import React, { useState } from 'react';

function changeBackcolor(color) {
    document.body.style.background = color;
    
 }


class Background extends React.Component {
    
    render() { 

        return <div> <button onClick={changeBackcolor}>Change background color to red</button></div>;
    }
}
 
export default Background;
