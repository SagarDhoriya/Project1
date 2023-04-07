import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateAuction() {
    const [data, setdata] = useState({});
    const navigate = useNavigate();
    let {id}=useParams();

    
        useEffect(()=>{
            if(id!==undefined){

            fetch("https://63f647e359c944921f711f19.mockapi.io/Products/"+id)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            return setdata(res);
        })
}});
    
    
    
  return (
    <div className="container">
      <h1 className="text-center my-3">Register Auction</h1>
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-mb-12">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="name"
          value={data.auctionName} 
          onChange={(e)=>{
            setdata({...data,auctionName:e.target.value})
          }}    
          
          required />
          <div className="invalid-feedback">Looks good!</div>
        </div>

        <div className="col-mb-12">
          <label htmlFor="dis" className="form-label">
            Example textarea
          </label>
          <textarea className="form-control" id="dis" rows="5"
          value={data.auctionDiscription} 
           onChange={(e)=>{
            setdata({...data,auctionDiscription:e.target.value})
          }}
          ></textarea>
        </div>


        <div className="col-mb-12">
          <label htmlFor="img" className="form-label">
            Product Image Link
          </label>
          <input type="text" className="form-control"
          value={data.auctionImage} 
           onChange={(e)=>{
            setdata({...data,auctionImage:e.target.value})
          }}
          id="img" />
        </div>

        

        <div className="col-mb-12">
          <label htmlFor="price" className="form-label">
            Starting Bid
          </label>
          <input type="number" min={0} className="form-control"
          value={data.auctionBid}  
          onChange={(e)=>{
            setdata({...data,auctionBid:e.target.value})
          }}
          
          id="price" />
        </div>
        

        <div className="col-mb-12">
          <label htmlFor="date" className="form-label">
            Auction Date
          </label>
          <input type="date"  className="form-control"
          value={data.auctionDate}  
          onChange={(e)=>{
            setdata({...data,auctionDate:e.target.value})
          }}
          
          id="date" />
        </div>

        

        <div className="col-12 d-grid my-2 w-75  col-6 mx-auto my-3">
          <button className="btn btn-primary" type="button"
          onClick={()=>{

            if(id!==undefined){
                fetch(
                    "https://63f647e359c944921f711f19.mockapi.io/Products/"+id ,
                    { method: "PUT" ,
                    body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"},}
                  )
                    .then((res) => {
                      return res.json();
                    })
                    .then((res) => {
                      console.log(data);
                      navigate('/')
                    });
            }else{

                fetch(
                    "https://63f647e359c944921f711f19.mockapi.io/Products/" ,
                    { method: "POST" ,
                    body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"},}
                  )
                    .then((res) => {
                      return res.json();
                    })
                    .then((res) => {
                      console.log(data);
                      navigate('/')
                    });
            }



            
          }}
          
          
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
