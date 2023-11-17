"use client"
import CountButton from "./CountButton"
import CountButton2 from "./CountButton2"
import SearchBar from "./SearchBar"
import React, {useEffect, useState} from "react"
export default function Page(){
    return <div>
        <h1>NextJS Assignment</h1>
        <h2>This button will increment by 1</h2>
        <CountButton color="blue"/>
        <h2>This button will increment by 2</h2>
        <CountButton2 />
        <hr />
        <a href="https://github.com/SamuelMocabee/CSCI331_nextjs">My github repo</a>
        <hr />
        <SearchBar />
        
    </div>
}