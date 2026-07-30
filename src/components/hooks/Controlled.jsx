import { useState } from "react";

function Controlled() {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setShowName(true);
        // console.log(name)
        setName("")

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button  type="submit">
                    Submit
                </button>
            </form>
            {/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */}
            {showName === true && <p>You have submitted. Name: {name}</p>}
        </div>
    );
}

export default Controlled;