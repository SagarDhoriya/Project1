import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/AllAuction.css"

export default function AllAuction() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("https://63f647e359c944921f711f19.mockapi.io/Products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setproduct(res);
      });
  }, []);

  const formatepro = product.map((pro) => {

    let time=new Date(pro.auctionDate);
    


    return (
      
        <div className="card my-2 me-1" style={{width: "20rem"}} key={pro.id} >

        <Link to={"/auction/"+pro.id}> <img src={pro.auctionImage} style={{maxwidth: "auto",height:"31vh"}} className="card-img-top" alt="..." /></Link>

         
          <div className="card-body">
            <h5 className="card-title text-center ">{pro.auctionName}</h5>
            <p className="text-center date">Auction Start : {time.getDate()} / {time.getMonth()} / {time.getFullYear()}</p>
            <Link to={"/auction/"+pro.id} className="btn btn-primary">
            More Detail
            </Link>
          </div>
        </div>
      
    );
  });

  return (
    <>
    <div className="container listing mt-4">
        {formatepro}   
    </div>
      
     
    </>
  );
}
