import axios from "axios";
import React, { useEffect, useState } from "react";
import ShippingTimeLine from "./ShippingTimeLine";


export default function FetchShipping() {
  const [shipping, getShipping] = useState('');
  const url = 'https://boxinator-maven-api.herokuapp.com/countries/';

  useEffect(() => {
    GetAllShipping();
  }, []);

  const GetAllShipping = () => {
    axios.get(`${url}`)
    .then((response) => {
      const AllShipping = response.data.shipping.AllShipping;
      getShipping(AllShipping);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return(
    <ShippingTimeLine shipping={shipping}/>
  )
  }
