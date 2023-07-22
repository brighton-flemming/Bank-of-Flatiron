import React from "react";

const TransactionTable = ({transactions}) => {
    return (
     <table>
       <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th> 
        </tr>
       </thead>
       <tbody>
        {transactions.map((transactions) => {
        <tr key={transactions.id}>
         <td>{transactions.date}</td>
         <td>{transactions.description}</td>
         <td>{transactions.category}</td>
         <td>{transactions.amount}</td>
        </tr>
        }
        )}
        
       </tbody>

     </table>

    )
}