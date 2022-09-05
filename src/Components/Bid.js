import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Bid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import axios from "axios";

function Bid() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/"
      )
      .then((res) => {
        setCoins(res.data.bids);
        console.log(res.data.bids);
      });
  }, []);

  return (
    <div className="bid-container">
      <CardGroup className="bid-body">
        {coins.map((coin) => {
          return (
            <Card className="card5" style={{ width: "30rem" }}>
              <div className="shop">
                <div className="shop-heading">
                  <h3>{coin.shop_address}</h3>
                </div>
                <div className="offer-price">
                  <h3>Rs {coin.offer_price}</h3>
                </div>
                <div className="delivery-and-service">
                  <h5>Delivery &amp; Services</h5>
                </div>
                <div className="express-delivery-icon">
                  <img alt="shope image" src={coin.express_delivery_icon} />
                </div>
                <div className="express-delivery-line">
                  <h5>Express Delievry</h5>
                </div>
                <div className="check-icon">
                  <img alt="check icon" src={coin.check_icon} />
                </div>
                <div className="hour">
                  <span>(delivery in one hour)</span>
                </div>

                <div className="return-option-icon">
                  <img alt="return option icon" src={coin.return_option_icon} />
                </div>
                <div className="return-option-heading">
                  <h5>Return Option</h5>
                </div>
                <div className="check-icon1">
                  <img alt="check icon" src={coin.check_icon} />
                </div>
                <div className="button1">
                  <button>
                    <img alt="extra offer icon" src={coin.extra_offer_icon} />{" "}
                    Extra Offer
                  </button>
                </div>

                <div className="shop-image">
                  <img alt="shope image" src={coin.shop_image} />
                </div>
                <div className="shop-name-heading">
                  <h5>{coin.shop_name}</h5>
                </div>

                <div className="product-name1">
                  <h5>{coin.product_name}</h5>
                </div>
                <div className="button2">
                  <button>Buy</button>
                </div>
              </div>
            </Card>
          );
        })}
      </CardGroup>
    </div>
  );
}

export default Bid;
