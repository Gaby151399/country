import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Pays() {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    const urlContry = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonContry = await response.json();
      console.log(jsonContry);
      setPays(jsonContry);
    };
    urlContry();
  }, []);

  return (
    <>
      <div className='row'>
        <ul className='col ps-5 row border'>
          {pays.map((pay, _index) => {
            return (
              <li
                className='col flag  img-thumbnail'
                key={pay.index}>
                <img
                  src={pay.flags.png}
                  alt={pay.name.common}
                  width={100}
                />
                <h4 className=' text-primary'>{pay.name.common}</h4>
                <h5 className=' text-danger'>{pay.capital}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
