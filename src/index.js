import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Gone from "./components/gone";
import Background from "./components/backgroundColor";
import NameButton from "./components/nameButton";
import Name from "./components/array";


function MyApp() {

return (
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
)

}



const element = <h1>Name</h1>;
ReactDOM.render([<Name/>, <Gone/>, <Background/>, <NameButton/>, <MyApp/>, ], document.getElementById('root'));