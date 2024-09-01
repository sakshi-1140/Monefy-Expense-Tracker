import { Radio, Select, Table } from "antd";
import React, { useState } from "react";
import searchImage from "../../assets/search.svg";
import { parse, unparse } from "papaparse";
import { toast } from "react-toastify";
const { Option } = Select;
function TransactionTable({ transactions, addTransaction, fetchTransactions }) {
  const [search, setSearch] = useState("");
  //const [selectedTag, setSelectedTag] = useState("");  //not used as of 30/08
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const filteredTransactions = transactions.filter((item) => {
    // return (
    //   item.name.toLowerCase().includes(search.toLowerCase()) &&
    //   item.type.includes(typeFilter)
    // );
    
    //use optional chaining (?.) to handle cases where name or type may be undefined.
    return (
      item.name?.toLowerCase().includes(search.toLowerCase()) &&
      item.type?.includes(typeFilter)
    );


    /*
     // these are not used as of 30/08; so delete these
       const searchMatch = search
        ? item.name.toLowerCase().includes(search.toLowerCase())
         : true;
       //const tagMatch = selectedTag ? item.tag === selectedTag : true;
       const typeMatch = typeFilter ? item.type === typeFilter : true;

       return searchMatch && typeMatch && tagMatch;
      */
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  //Export To CSV 
  function exportToCsv() {
    var csv = unparse({
      fields: ["name", "type", "tag", "date", "amount"],
      data: transactions,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //Import From CSV
  function importFromCsv(event) {
    event.preventDefault();
    try {
      parse(event.target.files[0], {
        header: true,
        complete: async function (results) {
        //    console.log("ResultsFromImportCSV->",results);
          // Now results.data is an array of objects representing your CSV rows
          for (const transaction of results.data) {
            // Write each transaction to Firebase, use the addTransaction function here
           console.log("Transactions->", transaction);
            const newTransaction = {
              ...transaction,
              amount: parseFloat(transaction.amount) || 0, // Ensure it's a number if parsing fails.
            };
          //  console.log("Parsed amount:", newTransaction.amount); // Debugging line
            await addTransaction(newTransaction, true);
          }
        },
      });
      toast.success("All Transactions Added from CSV File");
      fetchTransactions();
      event.target.files = null;
    } catch (e) {
      toast.error(e.message);
    }
  }



  return (
    <div
      style={{
        width: "97%",
        padding: "0rem 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        {/* search bar */}
        <div className="input-flex">
          <img src={searchImage} width="16" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Name"
          />
        </div>

        {/* Select DropDown */}
        <Select
          className="select-input"
          onChange={(value) => setTypeFilter(value)}
          value={typeFilter}
          placeholder="Filter"
          allowClear
        >
          <Option value="">All</Option>
          <Option value="income">Income</Option>
          <Option value="expense">Expense</Option>
        </Select>
      </div>
      <div className="my-table">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <h2>My Transactions</h2>

          <Radio.Group
            className="input-radio"
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
          >
            <Radio.Button value="">No Sort</Radio.Button>
            <Radio.Button value="date">Sort by Date</Radio.Button>
            <Radio.Button value="amount">Sort by Amount</Radio.Button>
          </Radio.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              width: "400px",
            }}
          >
            <button className="btn" onClick={exportToCsv}>
              Export to CSV
            </button>
            <label htmlFor="file-csv" className="btn btn-blue">
              Import from CSV
            </label>
            <input
              onChange={importFromCsv}
              id="file-csv"
              type="file"
              accept=".csv"
              required
              style={{ display: "none" }}
            />
          </div>
        </div>

        <Table dataSource={sortedTransactions} columns={columns} />
      </div>
    </div>
  );
}

export default TransactionTable;
