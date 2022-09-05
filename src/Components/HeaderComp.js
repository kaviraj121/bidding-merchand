import React from "react";
import "./HeaderComp.css";
import { useState, useEffect } from "react";
import axios from "axios";

function HeaderComp() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/"
      )
      .then((res) => {
        setCoins(res.data.heading);
        console.log(res.data.heading);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="image">
          <img alt="svg" src={coins.svg} />
        </div>
        <div className="heading">
          <h1>{coins.heading}</h1>
        </div>
        <div className="paragraph">
          <h3>{coins.sub_heading}</h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderComp;
