import React, { Component } from "react";
import "./OrderList.scss";
import OrderMenu from "./OrderMenu";
import FoodOrderCheckList from "../FoodOrderCheckList";
import FoodOrderPrice from "../FoodOrderPrice";
import data from "Data/orderListData";
import {connect} from "react-redux";
import * as actionTypes from "../../../store/actions"
import SideCartMenu from "./SideCartMenu";

import { withRouter } from 'react-router-dom';

class OrderList extends Component {
  state = {
    id: "",
    topValue: 20,
    menuclientHeight: "", // 메뉴 개수에 따라서 top의 크기를 변경하기위해 사용했습니다.
    menu: data.menu
  };

  handleClick= () =>{
    fetch("http://10.58.4.208:8004/order", {
      method: "post",
      body: JSON.stringify({
        user_phone_number:this.props.phoneData, 
        order_request:this.props.requestData, // 배달요청사항
        restaurant:{"id":this.props.menus.id},// 가게 아이디값
        delivery_fee:2000 , // 배달비
        delivery_address:this.props.addressData+" "+this.props.detailAddressData,
        payment_method:{"id":this.props.paymentData} ,
        // payment_method:"creditcard","online" //카드
        menus:[{"id":3},{"id":4}], // 메뉴
        amounts:[2,1], // 메뉴 개수
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          console.log("ok")
          //this.props.history.push("/main");//주문 땡스페이지
         // localStorage.setItem("user_id", res.user_access_token);
        }
      });
   this.goToSignup()
    }
  goToSignup() {
    this.props.history.push('/thank-you');
  }
  componentDidMount() {
    const { handleScroll } = this;
    window.addEventListener("scroll", handleScroll);
    this.setState({
      menuClientHeight: document.querySelector(".list-group-order").clientHeight // 메뉴 개수에 따라 높이값이 변경됩니다.
      // setState를 사용하지않으면 라이프사이클의 문제로 list-group-order가 안생겼을때 높이값을 가져오기때문에 항상 null이 써있어서
      // 이렇게 했습니다.
    });
  }

  handleScroll = () => {
    const { menuClientHeight } = this.state;
    let scrollY = window.scrollY;
    if (this.props.pageHeight <= 1000) {
      // 카테고리 배달정보 탭을 닫을경우 스크롤을 멈추게하는 기능입니다.
    } else if (100 <= scrollY && scrollY <= 285 - menuClientHeight) {
      this.setState({
        topValue: scrollY - 70
      });
    } else if (scrollY <= 100) {
      // 스크롤이 맨 위일경우 top:20
      this.setState({
        topValue: 20
      });
    } else {
      this.setState({
        // 스크롤이 맨 아래일 경우 메뉴수 체크한 뒤 아래 고정
        // (매뉴 수가 많으면 높이값이 커지게 되어서 menuClientHright변수를 사용했습니다.)
        topValue: 218 - menuClientHeight
      });
    }
  };

  render() {
    console.log(this.props.menus)
    const { topValue, menu } = this.state;
    console.log(this.props.restaurant)
    return (
      <div className="order-list" style={{ top: topValue }}>
        <div className="list-container">
          <div className="panel-heading">
            <span className>주문내역</span>
          </div>
          <div className="restaurant-title">{this.props.restaurant.name}</div>

          <ul className="list-group-order">
            <OrderMenu data={this.props.menus} />
            {/* <SideCartMenu/> */}
          </ul>

          <FoodOrderPrice total_price={this.props.totalPrice} />
          <FoodOrderCheckList />

          <button className="pay-btn" onClick={this.handleClick}>주문완료</button>
          {/* 모달 */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
      menus : state.menus,
      totalPrice : state.total_price,
      restaurant : state.restaurant
  }
}

export default connect(mapStateToProps)(withRouter(OrderList));
