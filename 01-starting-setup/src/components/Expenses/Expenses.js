import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const renderedExpenses = props.items.map((expense, i) => (
    <ExpenseItem
      key={i}
      date={expense.date}
      title={expense.title}
      amount={expense.amount} />
  ))

  return (
    <Card className="expenses">
      {renderedExpenses}
    </Card>
  )
}

export default Expenses