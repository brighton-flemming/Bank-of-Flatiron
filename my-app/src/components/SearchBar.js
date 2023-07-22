import React, { useState } from "react";

const SearchBar = ({transactions, onSearch}) => {
    const [searchName, setSearchName] = useState('')

    const handleSearchChange = (e) => {
        setSearchName(e.target.value);
        const filteredTransactions = transactions.filter((transactions)=> 
         transactions.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
        onSearch(filteredTransactions);
    }
   return (
    <div>
        <input
        type="text"
        placeholder="Search By Description"
        value={searchName}
        onChange={handleSearchChange}
        />
    </div>
   )
}