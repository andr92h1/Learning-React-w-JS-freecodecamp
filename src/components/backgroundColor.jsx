import React from "react";
import ReactDOM from "react-dom";



function ChangeBackcolor() {
    
    return (
       <div>
          <h1>Andreea</h1>
          <p>This is NOT paragraph</p>
          <ul> 
             <li>Hawaii</li>
             <li>Jamaica</li>
             <li>Thailand</li>
          </ul>
        </div>

    )
 }


class Background extends React.Component {
    
    render() { 

        return <div> <button onClick={ChangeBackcolor}>Change background color to red</button></div>;
    }
}
 
export default Background;
