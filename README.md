# Monefy Expense Tracker

## Overview

The Monefy Expense Tracker is a web application designed to help users manage their finances. Built with ReactJS and Firebase, this application allows users to track their income and expenses, visualize their spending through charts, and manage their financial data efficiently. Users can log in using Google authentication, and the app is fully responsive to provide a seamless experience across different devices.

## Live Preview:
- https://monefy-expense-tracker.vercel.app/

## Features

- **Google Authentication**: Secure login using Google email.
- **Income & Expense Management**: Add and track income and expenses.
- **Data Visualization**: 
  - Pie chart showing total spending based on tags.
  - Bar chart displaying the total balance for each month.
- **Transaction Records**: Keeps a record of all transactions.
- **CSV Import/Export**: 
  - Export transactions to CSV file.
  - Import transactions from a CSV file.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **ReactJS**: Front-end library for building the user interface.
- **Firebase**: For user authentication and data storage.
- **Chart.js**: For visualizing data with charts.
- **Toaster**: For user notifications.
- **PapaParse**: For CSV parsing and generation.
- **Ant Design**

## Screenshots


## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/Monefy-Expense-Tracker.git

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```
## 📂 Project Structure

```plaintext
Monefy-Expense-Tracker/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── search.svg
│   │   ├── transactions.svg
│   │   └── user.svg
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── styles.css
│   │   ├── Cards/
│   │   │   ├── Cards.jsx
│   │   │   └── styles.css
│   │   ├── Charts/
│   │   │   └── Chart.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── styles.css
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── styles.css
│   │   ├── Modal/
│   │   │   ├── AddExpenseModal.jsx
│   │   │   └── AddIncomeModak.jsx
│   │   ├── NoTransactions/
│   │   │   └── NoTransactions.jsx
│   │   ├── SignUpSignIn/
│   │   │   ├── SignUpSignIn.jsx
│   │   │   └── styles.css
│   │   └── TransactionsTable/
│   │       └── TransactionTable.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Signup.jsx
│   ├── App.css
│   ├── App.js
│   ├── firebase.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json

```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 💬 Contact

For any inquiries, reach out via [sakshichoudhary1140@gmail.com](mailto:sakshichoudhary1140@gmail.com).

---
