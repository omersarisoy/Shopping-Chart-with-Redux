import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem } from "../actions/action";
import { addToChart } from "../actions/action"
import { removeFromChart } from "../actions/action"


const Cart = (props) => {
  const totalPrice = props.cart?.reduce(
    (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.count),
    0,
  );

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>
      {props.cart.map(item => (
        <div className="book" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
          />
          <div>
            <h4>{item.name}</h4>
            <p>Yazar: {item.author}</p>
            <p>Fiyat: &#8378;{item.price}</p>
            <p>Adet: {item.count}</p>
            <p>Toplam: &#8378;{`${(item.price * item.count).toFixed(2)}`}</p>
            <p>Sepetinizde bu kitaptan toplam {item.count} adet var.</p>
            <button onClick={() => props.removeItem(item)} >-</button>
            <button onClick={() => props.removeFromChart(item)}>Sepetten Çıkar</button>
            <button onClick={() => props.addToChart(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {removeItem, addToChart, removeFromChart})(Cart) ;
