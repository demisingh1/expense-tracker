import { Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useExpenseContext } from '../Context/Expense_Context'

const inputState = {
    title:'',
    amount:'',
    type:''
}

const AddExpenseForm = () => {
    const{createExpense} = useExpenseContext()
    const[inputs, setInputs] = useState(inputState);

    const{title, amount} = inputs
    const onInputHandler = (e)=>{
     let name = e.target.name
     let value = e.target.value
     console.log(name, value)
     setInputs({...inputs, [name]:value})
    }
   const submitExpense = ()=>{
    createExpense(inputs)
   }
  return (
    <div className='expese-form'>
        <form action="">
            <FormControl>
                <FormLabel>Add Expense</FormLabel>
                <Input type='text' placeholder='Enter Expense here'  name='title' value={title} onChange={onInputHandler}/>
            </FormControl>
            <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input type='number' name='amount' value={amount} onChange={onInputHandler}/>
            </FormControl>
            <RadioGroup>
                <Stack direction='row'>
                    <Radio name='type' value='income' onChange={onInputHandler}>income</Radio>
                    <Radio name='type' value='expense' onChange={onInputHandler}>Expense</Radio>
                </Stack>
            </RadioGroup>
            <Button onClick={submitExpense} >Submit Expense</Button>
        </form>
    </div>
  )
}

export default AddExpenseForm