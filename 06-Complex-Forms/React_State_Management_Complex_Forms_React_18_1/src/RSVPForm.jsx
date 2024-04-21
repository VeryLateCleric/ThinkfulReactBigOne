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
            </div>
            <div>
                <label>Age:</label>
            </div>
            <div>
                <label>New Member:</label>
            </div>
            <div>
                <label>Comment:</label>
            </div>
        </form>
    );
}

export default RSVPForm;
