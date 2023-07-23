import React, { useState, useEffect } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);



  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) {
        throw new Error("Network response was srewed up. Sorry");
      }
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data)
    } catch (error) {
      console.log("Error in obtaining the transactions:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = async (newTransaction) => {
    try {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTransaction),
      });
      if (!response.ok) {
        throw new Error("Network response was srewed up.Sorry");
      }
      const data = await response.json();
      setTransactions([...transactions, data]);
      setFilteredTransactions([...transactions, data]);

    } catch (error) {
      console.log("Error in obtaining the transactions:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
    const filteredTransactions = transactions.filter((transactions) =>
      transactions.description
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setFilteredTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1> Bank Of Flatiron</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable searchName={searchName}
        onSearchChange={handleSearchChange} transactions={searchName !== "" ? filteredTransactions : transactions} />
      <SearchBar transactions={transactions} />
    </div>
  );
};

export default App;
