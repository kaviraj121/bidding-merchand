import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./MainProduct.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainProduct() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/"
      )
      .then((res) => {
        setCoins(res.data.main_product);
        console.log(res.data.main_product);
      });
  }, []);

  return (
    <div className="product">
      <Card style={{ width: "79rem" }} className="flex-container">
        <Container>
          <Row>
            <Col>
              <div className="image1">
                <div className="product-icon">
                  <img alt="product" src={coins.main_product_svg} />
                </div>
              </div>
            </Col>
            <Col xs={5}>
              <div className="body1">
                <div className="heading1">
                  <h5>{coins.product_title}</h5>
                </div>
                <div className="subheading">
                  <h5>{coins.product_pipeline}</h5>
                </div>
                <div className="priceicon-image">
                  <img alt="price icon" src={coins.online_price_icon} />
                </div>
                <div className="online-price">
                  <h4>{coins.online_price}</h4>
                </div>
                <div className="quantity">
                  <h5>{coins.quantity}</h5>
                </div>
                <div className="anchor">
                  <a>All Details</a>
                </div>
              </div>
            </Col>

            <Col>
              <div className="status-container">
                <div className="status">
                  <h5>Status</h5>
                </div>
                <div className="status-icon">
                  <img
                    width={"25px"}
                    alt="status icon"
                    src={coins.status_icon}
                  />
                </div>
                <div className="time-remaining">
                  <h6>Time Remaining</h6>
                </div>
                <div className="time-remaining-data">
                  <h5>{coins.time_remaining} Minutes</h5>
                </div>
                <div className="bid-placed">
                  <h4>BID PLACED |</h4>
                </div>
                <div className="bid-placed-data">
                  <h4>{coins.bid_placed}</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
export default MainProduct;
