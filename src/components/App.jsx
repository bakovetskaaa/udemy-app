import React, {useState} from "react";

function App() {
    const [headingText, setHeadingText] = useState("");
    const [isMouseOver, setMouseOver] =useState(false);
    const [name, setName] = useState("");

    function handleClick() {
    setHeadingText(name);
    }

    function handleMouseOver(x) {
        setMouseOver(true);
    }
    function handleMouseOut(x) {
        setMouseOver(false);
    }




    function handleChange(event) {
        setName(event.target.value);

        event.preventDefault()
    }
    
    return (
        <div className="container">
            <h1>Hello {headingText}</h1>
            <form onSubmit={handleChange}>
                    <input onChange={handleChange} type="text" placeholder="What's your name?" />
                    <button type={"submit"}
                        style={{backgroundColor: isMouseOver ? "black" :  "white" }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        onClick={handleClick}>
                        Submit
            </button>
            </form>
        </div>
    );
}

export default App;
