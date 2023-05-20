import React, { useState } from "react";


import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";


function App() {
    const [items, setItems] = useState([]);



    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }

    
    function deleteItem(id) {
        setItems(prevItem=>{
            return prevItem.filter(
                (item, index)=>{
                    return index !== id
                }
            )
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                {
                <InputArea
                // text={inputText}
                onAdd={addItem}
                />
                }
            </div>
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
