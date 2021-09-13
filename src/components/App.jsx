import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"


function App() {
    return (

<div>

    <Header />
    <MainContent/>
    <Footer/>

<br></br>

    <nav>
       <h1>This is the Parent. The one above is the CHILD</h1>
    <ul>
        <li>Yoga</li>
        <li>Programming</li>
        <li>Tattoos</li>
    </ul>
    </nav>
         <main> <p> This is what I love to do. And you. </p></main>
        <Footer/>
</div>

    )
};



export default App;