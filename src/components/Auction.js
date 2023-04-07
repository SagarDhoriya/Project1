import { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import "./css/Auction.css";

export default function Auction() {
  
  const [auction, setauction] = useState({});
  
  const { id } = useParams();
  

  useEffect(() => {
    fetch("https://63f647e359c944921f711f19.mockapi.io/Products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return setauction(res);
      });
  },[id]);

  return (
    <>
      <div className="container product mt-3">
        <div className="productImage me-2">
          <img
            src={auction.auctionImage}
            style={{ width: "100%", height: "100%" }}
            alt="Error"
          />
        </div>
        <div className="Productdetails ms-2">
          <h1 className="title">{auction.auctionName}</h1>
          <p>{auction.auctionDiscription}</p>

          <h3> Live Bid : &#x20B9; &nbsp;{auction.auctionBid}</h3>

          <div className="input-group my-3">
            <span className="input-group-text">&#x20B9;</span>
            <input
              type="number"
              className="form-control"
              min={auction.auctionBid}
              aria-label="Amount (to the nearest dollar)"
              
            />
            <span className="input-group-text">.00</span>
          </div>
          
          <div className="d-grid my-2 w-75  col-6 mx-auto">
            <button className="btn btn-primary ">
             <h5>Bid More</h5> 
            </button>
          </div>

          <div className="d-flex flex-row-reverse">
            <button className="btn btn-primary">
              <Link className="text-white button" to="/auctions">
                Back
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
