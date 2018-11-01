import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render ExpensesSummary correctly when no expenses are present', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9900} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9999} />)
  expect(wrapper).toMatchSnapshot()
})
