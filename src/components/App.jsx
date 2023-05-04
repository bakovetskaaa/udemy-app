import React from "react";

import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emoji){
    return (
        <Entry
        key = {emoji.id}
        id={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}

        />
    )
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
                {emojipedia.map(createEntry)}

        </div>
    );
}

export default App;
