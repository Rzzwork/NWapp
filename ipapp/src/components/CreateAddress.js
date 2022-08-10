import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function CreateAddress() {

    const [input, setInput] = useState({
        title: '',
        address: ''
    });

    function handleChange(e) {
        //deconstrucring: below without deconstructe would be const name = e.target.name
        //use deconstrucring just reduce code complexity

        const { name, value } = e.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        const newAddress = {
            title: input.title,
            address: input.address
        }

        axios.post('http://localhost:8080/create', newAddress)

        setInput({
            title: '',
            address: ''
        })
        console.log("data sent")

    }
    return (
        <div className='container'>
            <div>
                <form>
                    <input onChange={handleChange} name='title' value={input.title}></input>
                    <input onChange={handleChange} name='address' value={input.address}></input>
                    <button onClick={handleClick}>submit</button>
                </form>
            </div>
        </div>
    )
}
