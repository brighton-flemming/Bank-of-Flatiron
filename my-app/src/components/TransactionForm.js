import React, {useState} from "react";

const TransactionForm = ({onAddTransaction}) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();

const newTransaction = {
    date,
    description,
    category,
    amount:parseFloat(amount),
};

onAddTransaction(newTransaction);

setDate('');
setDescription('');
setCategory('');
setAmount('');

};


return (
    <form onSubmit={handleSubmit}>
     <div>
        <label htmlFor="date">Date:</label>
        <input
         type="date"
         id="date"
         value={date}
         onChange={(e) => setDate(e.target.value)}
        />
     </div>
     <div>
        <label htmlFor="description">Description:</label>
        <input
         type="description"
         id="description"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
        />
     </div>
     <div>
        <label htmlFor="category">Category:</label>
        <input
         type="category"
         id="category"
         value={category}
         onChange={(e) => setCategory(e.target.value)}
        />
     </div>
     <div>
        <label htmlFor="amount">Amount:</label>
        <input
         type="amount"
         id="amount"
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
        />
     </div>
     

    </form>
)

}



