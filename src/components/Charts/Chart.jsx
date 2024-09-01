import { Line, Pie } from "@ant-design/charts";
import React from "react";

function Chart({ sortedTransactions }) {
  // const sampleData = [
  //     { year: '1991', value: 3 },
  //     { year: '1992', value: 4 },
  //     { year: '1993', value: 3.5 },
  //     { year: '1994', value: 5 },
  //     { year: '1995', value: 4.9 },
  //     { year: '1996', value: 6 },
  //     { year: '1997', value: 7 },
  //     { year: '1998', value: 9 },
  //     { year: '1999', value: 13 },
  //   ];

  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  const spendingData = sortedTransactions.filter((transaction)=>{
    if(transaction.type=="expense"){
        return {tag : transaction.tag,amount:transaction.amount};
    }
  })

  const finalSpendings = spendingData.reduce((acc,obj)=>{
    let key=obj.tag;
    if(!acc[key]){
        acc[key]={tag:obj.tag,amount:obj.amount}; 
    }else{
        acc[key].amount+=obj.amount;
    }
    return acc;
  },{})
//console.log("Spending Array", Object.values(finalSpendings));
const spendingDataArray = Object.values(finalSpendings);  
/*
// Another way without using reduce,
let newSpendings = [
    {tag:"food",amount:0},
    {tag:"education",amount:0},
    {tag:"office",amount:0},
];
spendingData.forEach((item)=>{
    if(item.tag=="food"){
        newSpendings[0].amount+=item.amount;
    }else if(item.tag=="education"){
        newSpendings[1].amount+=item.amount;
    }else if(item.tag=="office"){
        newSpendings[2].amount+=item.amount;
    }
})
*/

  const config = {
    data,
    width: 500,
    autoFit: true,
    xField: "date",
    yField: "amount",
  };
  const spendingConfig = {
    data:spendingDataArray,
  //  data:newSpendings,  
    width: 500, 
    angleField: "amount",
    colorField: "tag",
  };
  let chart;
  let pieChart;
  return (
    <div className="charts-wrapper">
      <div>
        {/* Line Chart - Edit this */}
        <h2 style={{marginTop:0}}>Financial Statistics</h2>
        <Line
          {...config}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>
      <div>
        {/* Pie Chart */}
        <h2>Total Spending</h2>
        {spendingDataArray.length == 0 ? (
                    <p>Seems like you haven't spent anything till now...</p>
                  ) : (
                    <Pie
                    {...spendingConfig}
                    onReady={(chartInstance) => (pieChart = chartInstance)}
                  />
                  )}
    
      </div>
    </div>
  );
}

export default Chart;
