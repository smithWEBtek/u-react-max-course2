import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log('[Expenses.js] selectedYear: ', selectedYear);

    (props.items.filter(expense => {
      return expense.date <= selectedYear
    }))
  }

  const filteredItems = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p className="noItems" >No items for selected year.</p>

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map(expense => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount} />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses
