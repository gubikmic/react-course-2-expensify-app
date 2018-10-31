import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: undefined
  }
  const exampleText = 'exampleText'
  const action = {
    type: 'SET_TEXT_FILTER',
    text: exampleText
  }
  const state = filtersReducer(currentState, action)
  expect(state.text).toBe(exampleText)
})

test('should set startDate filter', () => {
  const currentState = {}
  const newStartDate = moment().valueOf()
  const action = {
    type: 'SET_START_DATE',
    startDate: newStartDate
  }
  const state = filtersReducer(currentState, action)
  expect(state.startDate).toEqual(newStartDate)
})

test('should set endDate filter', () => {
  const currentState = {}
  const newEndDate = moment().valueOf()
  const action = {
    type: 'SET_END_DATE',
    endDate: newEndDate
  }
  const state = filtersReducer(currentState, action)
  expect(state.endDate).toEqual(newEndDate)
})