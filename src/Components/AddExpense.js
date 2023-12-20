import React, { useState } from "react";
import { useExpenseContext } from "../Context/Expense_Context";
import AddExpenseForm from "./AddExpenseForm";
import { Button } from "@chakra-ui/react";

const AddExpense = () => {
  const { AddExpense, expenseFormShowHandler } = useExpenseContext();

  return (
    <div>
      <Button className="btn" onClick={expenseFormShowHandler}>
        AddExpense
      </Button>

      {AddExpense && <AddExpenseForm />}
    </div>
  );
};

export default AddExpense;
