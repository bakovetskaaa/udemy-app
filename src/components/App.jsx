import React, {useState} from "react";

function App() {
     // const [name, setName] = useState("");
     // const [surname, setSurname] = useState("");

     const [fullName, setFullName] = useState({
         fName: "",
         lName: ""

     });

     // function handleName(event) {
     //     setName(event.target.value)
     // }
     //
     // function handleSurname(event) {
     //     setSurname(event.target.value)
     // }

    function handleChange(event){

        const { value, name } = event.target;
        //
        // console.log(value);
        // console.log(name);

        setFullName(prevValue => {
            if(name === "fName"){
                return {
                    fName: value,
                    lName: prevValue.lName
                };
            } else if (name === "lName"){
                return {
                    fName: prevValue.fName,
                    lName: value
                }
            }
        })
    }



    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>

                <input
                    onChange={handleChange}
                    name="fName"
                    placeholder="First Name"
                    value={fullName.fName}/>

                <input
                    onChange={handleChange}
                    name="lName"
                    placeholder="Last Name"
                    value={fullName.lName}/>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
