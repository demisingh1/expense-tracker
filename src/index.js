import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpenseProvider } from './Context/Expense_Context';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseProvider>
      <ChakraProvider>
    <App />
    </ChakraProvider>
    </ExpenseProvider>
  </React.StrictMode>
);

