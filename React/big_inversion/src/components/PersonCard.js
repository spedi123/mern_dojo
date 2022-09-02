import React from "react"

const PersonCard = (props) => {
    const {lastName, firstName, age, hairColor} = props.profile;
    return (
        <div>
            <h1>
                {firstName}, {lastName}
            </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;