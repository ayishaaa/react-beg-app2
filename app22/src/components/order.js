// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import { Image } from 'react-bootstrap';
// import ReactDOM from "react-dom/client";

const Order = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count + 1);
      }, [count]);

  return (
    <>
      <h1>Take your Order</h1>
      <h5 className="card-title">Your cart has {count+1} items</h5>
      <div className="card" style={{ width: "18rem" }}>
        <Image src="https://i.pinimg.com/564x/9f/42/83/9f4283f08e1ff37e1af0786cd863ac3f.jpg" className="card-img-top" alt="Placeholder image" />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
            Add to your cart
          </p>
          <button onClick={() => setCount((d) => d - 1)}>-</button>
          <p>No. of items : {calculation}</p>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
      
    </>
  );
};


export default Order;
