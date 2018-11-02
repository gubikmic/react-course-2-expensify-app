import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
  render() {
    const expenseWord = this.props.expenseCount === 1 ? 'expense' : 'expenses'
    const expenseCount = this.props.expenseCount
    const formattedExpensesTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00')
    return (
      <div>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)