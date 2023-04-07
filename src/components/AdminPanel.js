import React, { useEffect } from "react";
import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [data, setdata] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://63f647e359c944921f711f19.mockapi.io/Products/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res)
        return setdata(res);
      });
  }, []);

  const formatData = data.map((pro) => {
    return (
      <tr key={pro.id}>
        <td>{pro.id}</td>
        <td>{pro.auctionName}</td>
        <td>{pro.auctionBid}</td>
        <td><Link className="text-white bg-primary btn" to={"/auction/"+pro.id}>View More</Link></td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              fetch(
                "https://63f647e359c944921f711f19.mockapi.io/Products/"+pro.id,
                { method: "DELETE" }
              )
                .then((res) => {
                  return res.json();
                })
                .then((res) => {
                  navigate("/");
                });
            }}
          >
            Remove
          </button>
        </td>
        
      </tr>
    );
  });

  return (
    <>
      <div className="container ">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Minimume Bid</th>
              <th scope="col">&nbsp;&nbsp;&nbsp; Detail</th>
              <th scope="col">&nbsp;&nbsp;&nbsp; Delete</th>
            </tr>
          </thead>
          <tbody>{formatData}</tbody>
        </table>
      </div>
    </>
  );
}
