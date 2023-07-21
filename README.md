# Bank-of-Flatiron
The Bank-of-Flatiron is a React application that empowers users to efficiently track and manage their bank transactions.This app provides a user-friendly interface to view a table of recent transactions, add new transactions, and apply filters based on transaction descriptions.

# Core Deliverables
As a user, you can perform the following tasks with the Bank Transaction Monitor App:

1. View Transactions Table: The app displays a well-organized table containing crucial details of recent bank transactions. These details include the transaction date, description, category, and amount, allowing users to easily review their financial activities.

2. Add New Transaction: Users can easily add new transactions to their record through a user-friendly form. After filling out the necessary information such as the date, description, category, and amount, they can submit the form. The new transaction will be added to the table and securely persisted using the backend API for future reference.

3. Filter Transactions: The app offers a powerful search functionality, enabling users to filter transactions based on their descriptions. By typing into the search bar, only transactions with matching descriptions will be displayed in the table, helping users quickly find specific transactions of interest.

# Technologies Used
The Bank Transaction Monitor App harnesses the following technologies to deliver an efficient and seamless user experience:

1. React: A robust JavaScript library for building interactive user interfaces and managing stateful components. React enables the dynamic rendering and updating of transaction data, enhancing user interaction.

2. JSON Server: To facilitate data management and storage, the app employs a simple mock API server. This server serves the transaction data and handles POST requests to store new transactions persistently.


 # Getting Started
To experience the full functionality of the Bank Transaction Monitor App, follow these steps:

1. Clone the Repository: Begin by cloning the project's repository from GitHub to your local machine.

2. Install Dependencies: Ensure you have Node.js and npm installed on your machine. Run npm install to install all the project dependencies.

3. Start the JSON Server: The app leverages a JSON Server for data management. Use npm run start-server to initiate the server.

4. Start the React App: To launch the Bank Transaction Monitor App, execute npm start and open the app in your web browser.

# Project Structure
The Bank Transaction Monitor App follows a well-organized project structure, making it easy to navigate and understand:

go
Copy code
├── src
│   ├── components
│   │   ├── TransactionTable.js
│   │   ├── TransactionForm.js
│   │   └── SearchBar.js
│   ├── App.js
│   ├── index.js
│   └── db.json
├── package.json
└── package-lock.json
1. components: This directory contains the main components of the app, such as TransactionTable.js for displaying transactions, TransactionForm.js for adding new transactions, and SearchBar.js for filtering transactions.

2. App.js: The root component of the app, responsible for managing the layout and rendering other components.

3. index.js: The entry point of the app, which renders the root component and starts the React application.

4. db.json: A JSON file that serves as a mock database, providing sample transaction data for the app.

# Usage
Once the Bank Transaction Monitor App is running, you can utilize its various features to manage your bank transactions efficiently:

1. View the transactions table to review your recent financial activities.

2. Use the search bar to filter transactions based on their descriptions, helping you locate specific transactions with ease.

3. Add new transactions by filling out the user-friendly form. Submitting the form will save the new transaction to the table and persist it securely using the backend API.

# Conclusion
The Bank of Flatiron empowers users to take control of their financial records and efficiently manage their bank transactions. Whether it's viewing transaction history, adding new entries, or filtering data, this app provides a seamless and intuitive user experience. Feel free to explore, customize, and enhance the app further to meet your specific requirements. Happy monitoring and managing your bank transactions!