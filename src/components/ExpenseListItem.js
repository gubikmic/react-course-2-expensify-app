import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3><Link to={"/edit/" + id}>{description}</Link></h3>
     {numeral(amount / 100).format('$0,0.00')} - date: {moment(createdAt).format('MMMM Do, YYYY')}
  </div>
)

export default (ExpenseListItem)