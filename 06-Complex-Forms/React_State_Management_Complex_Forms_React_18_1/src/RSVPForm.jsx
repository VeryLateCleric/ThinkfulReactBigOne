import React, { useState } from "react";

function RSVPForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isNewMember, setIsNewMember] = useState(false);
    const [comment, setComment] = useState("");

    const handleNameChange = (event) => {setName(event.target.value);}
    const handleAgeChange = (event) => {setAge(event.target.value);}
    const handleNewMemberChange = (event) => {setIsNewMember(event.target.checked);}
    const handleCommentChange = (event) => {setComment(event.target.value);}
    
    const handleSubmit = (event) => {
        console.log(`${name}`, `${age}`, `${isNewMember}`, `${comment}`)
        setName("");
        setAge("");
        setIsNewMember("");
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>Age:</label>
                <select value={age} onChange={handleAgeChange}>
                    <option value="">Prefer not to say</option>  
                    <option value="0-19">0-19</option> 
                    <option value="20-39">20-39</option> 
                    <option value="40-59">40-59</option> 
                    <option value="60+">60+</option> 
                </select>
            </div>
            <div>
                <label>
                    New Member:
                    <input type="checkbox" checked={isNewMember} onChange={handleNewMemberChange} />
                </label>
            </div>
            <div>
                <label>Comment:</label>
                <textarea value={comment} onChange={handleCommentChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RSVPForm;
