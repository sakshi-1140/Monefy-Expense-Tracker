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
![Screenshot 2024-08-27 at 12 18 06 AM](https://github.com/user-attachments/assets/79d9f01a-ed58-400f-b075-1672c085f793)

![Screenshot 2024-08-27 at 12 18 17 AM](https://github.com/user-attachments/assets/655c2cc2-f31b-43b0-8d6b-89a39c08609d)

![Screenshot 2024-08-27 at 12 23 47 AM](https://github.com/user-attachments/assets/b3f002f3-a6dd-4af1-b170-766feb09e9bf)

![Screenshot 2024-08-27 at 12 23 39 AM](https://github.com/user-attachments/assets/07b6435b-516e-45b9-9e38-9cd0e838cfc7)

![Screenshot 2024-08-27 at 12 24 41 AM](https://github.com/user-attachments/assets/bee51e07-e1e8-4cdd-8f58-18b8683c2835)

![Screenshot 2024-08-27 at 12 25 21 AM](https://github.com/user-attachments/assets/7a31ab99-a364-40b9-8563-d776304131df)

![Screenshot 2024-08-27 at 12 25 34 AM](https://github.com/user-attachments/assets/b33fd728-0eda-4438-b23a-9759a0cd9f7d)

![Screenshot 2024-08-27 at 12 25 42 AM](https://github.com/user-attachments/assets/bd88a1ee-46d3-4f33-9831-ce2c844ca1f0)


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
