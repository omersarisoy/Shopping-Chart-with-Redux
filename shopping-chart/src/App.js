import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { connect } from "react-redux";


const App = props => {
  return (
    <div className="App">
      <h1>
        My Book Chart
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
}
 export default connect(mapStateToProps)(App);