import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');


  const renderedExpenses = props.items.map((expense, i) => (
    <ExpenseItem
      key={i}
      date={expense.date}
      title={expense.title}
      amount={expense.amount} />
  ))

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log('[Expenses.js] selectedYear: ', selectedYear);
  }

  return (
    <div>
    <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear} />
      {renderedExpenses}
    </Card>
    </div>
  )
}

export default Expenses