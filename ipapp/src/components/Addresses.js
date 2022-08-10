import React from 'react'
import { useState, useEffect } from 'react';


export default function Addresses() {


    //get address and post on the web 

    const [addresses, setAddress] = useState([{
        title: '',
        address: ""
    }])
    //use useEffect to fetch data
    useEffect(() => {
        fetch('/create')
            .then(res => res.json()) //response data as json
            .then(data => setAddress(data)) //set addresses with data 

    })
    return (
        <div className='container'>
            {
                addresses.map((item) => {
                    return (
                        <div>
                            <h1>{item.title}</h1>
                            <h1>{item.address}</h1>
                        </div>
                    )

                })
            }
        </div>
    )
}
