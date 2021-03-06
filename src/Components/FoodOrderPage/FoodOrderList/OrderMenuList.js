import React, { Component } from "react";

class OrderMenuList extends Component {
  render() {
    const { name, count, price, total_price} = this.props.info
    return (
      <li className="list-group-item">
        <div className="menu-title">
          {name} x {count}개
        </div>
        <div className="menu-price">{total_price}원</div>
      </li>
    );
  }
}

export default OrderMenuList;