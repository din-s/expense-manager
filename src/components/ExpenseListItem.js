import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, title, amount, createdAt }) => (
  <div>
    <h3>{title}</h3>
    <p> Amount :{amount} , createdAt :
      {moment(createdAt).format('DD/MM/YYYY')}
    </p>
    <Link to={`/edit/${id}`}>
      Edit
  </Link>
  </div>
)

export default ExpenseListItem;