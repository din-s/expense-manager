import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./src/routers/AppRouter";
import configureStore from "./src/store/configureStore";

import "./style.css";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

render(jsx, document.getElementById("root"));

// Playing with localStorage
// import moment from 'moment';
// const getSavedExpenses = localStorage.getItem('expenses')
// const expenses=[{
//   title:'first',
//   amount:70,
//   createdAt:moment()
// },
// {
//   title:'Second',
//   amount:100,
//   createdAt:moment()
// }]

// console
// getSavedExpenses !== null ? JSON.parse(getSavedExpenses):localStorage.setItem('expenses',JSON.stringify(expenses))

// console.log(JSON.parse(getSavedExpenses))
