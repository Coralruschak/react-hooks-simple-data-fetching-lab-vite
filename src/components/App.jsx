import React from "react"
import { useState, useEffect } from 'react'
import DogButton from "./DogButton"


function App() {

    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDogImage()
    },[])

    function fetchDogImage() {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then (data => {
            setDogImage(data.message)
            setLoading(false)
    })
        .catch(error => console.log("Error fetching user", error))
    }
    return (
        <div>
            {loading === true ?
                <p>Loading...</p> :
                <img src={dogImage} alt="dog image"/>
            }
            <DogButton />
        </div>
    )
};

export default App
