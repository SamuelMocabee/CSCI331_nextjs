"use client"
import CountButton from "./CountButton"
import CountButton2 from "./CountButton2"
import React from "react"
export default function Page(){
    return <div>
        <h1>This button will increment by 1</h1>
        <CountButton color="blue"/>
        <h1>This button will increment by 2</h1>
        <CountButton2 />
        <hr />
        <a href="https://github.com/SamuelMocabee/CSCI331_nextjs">My github repo</a>
        <hr />
        <p>Search Bar</p>
    </div>
}