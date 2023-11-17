import React, {useState, useEffect} from "react";
import "./SearchBar.css"

export default function SearchBar() {
    const[filterProducts, setFilteredProducts] = useState([])
    const [searchValue, setSearchValue] = useState("")
    useEffect(fetchAPIData, [searchValue])
    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchValue.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="prodStyle">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <img style={{width:"100px"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/><br></br>
        <button onClick={handleClearClick}>Clear</button><br></br>
        <div>{filterProducts}</div>
    </div>
}
