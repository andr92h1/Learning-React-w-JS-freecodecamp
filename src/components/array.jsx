import React from 'react';


function MyName() {


    return (

        <div>
        <p>Andreea</p>
        </div>
    )
}


class Name extends React.Component {
    
    render() { 

        return <div>{MyName}</div>
    
    }

}

export default Name;
