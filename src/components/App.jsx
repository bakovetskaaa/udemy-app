import React from "react";

import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar
                img="data:image/jpeg;base64,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"
            />
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
            />
        </div>
    );
}

export default App;
