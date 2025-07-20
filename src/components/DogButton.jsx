import React from "react"

const DogButton = ({fetchDogImage}) => {
    return (
        <>
            <button onClick={fetchDogImage}>New Dog</button>
        </>
    )
}

export default DogButton