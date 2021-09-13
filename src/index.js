import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Gone from "./components/gone";
import Background from "./components/backgroundColor";
import NameButton from "./components/nameButton";
import Name from "./components/array";
import reactDom from "react-dom";
import App from "./components/App";
import NewFunction from "./components/NewFunction"
import ChangeDate from "./components/Date";

import "./index.css";


function MyApp() {

  const firstName = "Andreea"
  const middleName = "Teodora" 

return (

  <div>
    <h1> Hello {`${firstName} ${middleName}`}! </h1>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
</div>
)

};

function FunctionalComponents() {

    return (
        <div>
          <h1>Andreea Teodora</h1>
          <p>This is a paragraph</p>
          <ul> 
             <li>Hawaii</li>
             <li>Jamaica</li>
             <li>Bali</li>
          </ul>
        </div>
    )
}

const element = <h1>Name</h1>;
ReactDOM.render([<Name/>, <Gone/>, <NameButton/>, <MyApp/>, <FunctionalComponents/>, <Background/>,], document.getElementById('root'));
ReactDOM.render([<App />, <NewFunction/>, <MyApp />, <ChangeDate />, ], document.getElementById("root"))