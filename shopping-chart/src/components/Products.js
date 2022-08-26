import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToChart } from "../actions/action";

const Products = props => {
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map(item => (
        <div className="book" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />
          <div>
            <h4>{item.name}</h4>
            <p>Yazar: {item.author}</p>
            <p>Fiyat: &#8378; {item.price}</p>
            <button onClick={() => props.addToChart(item)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  { addToChart }
  )(Products);
