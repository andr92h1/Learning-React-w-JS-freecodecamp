import React from 'react';




function removeDivOnClick()
{
document.getElementsByClassName("divGone" <= 100).style.display = "none";

};

class Gone extends React.Component {
    render() { 
        return <div className="divGone" onClick={removeDivOnClick}></div>
    }
};
 

export default Gone;