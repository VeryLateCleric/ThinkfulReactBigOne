import React, { useState } from "react";

function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />  
            </div>
            <div>
                <label htmlFor="breed">Breed</label>
                <input
                    type="text"
                    id="breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                />  
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />  
            </div>
        </form>
    )
}

export default DogForm;
