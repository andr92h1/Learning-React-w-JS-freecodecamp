import React from "react"

function ChangeDate () {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours < 12) {

    timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17){
    timeOfDay = 'afternoon'
    } else {
    timeOfDay = 'night'
    }


const styles = {
    color: "#000000", 
    backgroundColor: "#FF2D00",
    fontSize: 24,
}

    return (
    <h1 style={styles}> Good {timeOfDay}!</h1>

    )

}


export default ChangeDate;