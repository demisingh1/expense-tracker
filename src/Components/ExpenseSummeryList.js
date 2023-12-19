import React from "react";

const ExpenseSummeryList = ({ ...item }) => {
  const { title, type, amount } = item;
  return (
    <div>
      {/* // rendring items here */}
      <div className="summary-list">
        <h3>{title}</h3>
        <h3 style={{ color: `${type === "income" ? "#088F8F" : ""}` }}>
          {type === "income" ? "income" : ""}
        </h3>
        <h3 style={{color:`${type === 'expense' ?'#F44336' :''}`}}>{type === "expense" ? "expense" : ""}</h3>
        <h3 style={{color:`${type === 'expense' ?'#F44336' :'#088F8F'}`}} >
            {amount}</h3>
      </div>
    </div>
  );
};

export default ExpenseSummeryList;
