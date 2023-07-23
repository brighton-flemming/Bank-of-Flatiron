import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';


 const App = () => {

  const [transactions, setTransactions] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect (() => {
    fetchTransactions();
  }, [])

  const fetchTransactions = async () => {
    
  }

  }





   
    


export default App;
