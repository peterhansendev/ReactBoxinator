import React from "react";
import { useState } from "react";
import FirstLastName from "../newUser/newUserComponents/firstLastName";
import Email from "../newUser/newUserComponents/email";
import Zip from "../newUser/newUserComponents/zip";
import ContactNumber from "../newUser/newUserComponents/contactNumber";
import { send } from "emailjs-com";
import ShippingFee from "../../components/shippingCalculator/shipping";
import "./guest.css";

const Guest = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zip, setZip] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [shippingFee, setShippingFee] = useState("");
  const [weight, setWeight] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [destination, setDestination] = useState("");
  const [packageType, setPackageType] = useState("");
  const [showResults, setShowResults] = useState(false);
  /* 
  boxColor: "string",
          boxId: 0,
          created_at: 1,
          destinationCountry: "string",
          packageStatus: "CREATED",
          receiverName: "string",
          shipmentPrice: 0,
          weightKg: 0
          */
  function PostUserInfo() {
    if (
      firstName &&
      lastName &&
      email &&
      zip &&
      contactNumber &&
      shippingFee &&
      weight &&
      zip &&
      destination &&
      packageType
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          /* firstName,
          lastName,
          email,
          zip,
          contactNumber,
          shippingFee,
          weight,
          totalCost,
          destination,
          packageType, */
          boxColor: packageType,
          boxId: 0,
          created_at: 1,
          destinationCountry: destination,
          packageStatus: "CREATED",
          receiverName: firstName,
          shipmentPrice: totalCost,
          weightKg: weight,
        }),
      };
      fetch(
        "https://boxinator-maven-api.herokuapp.com/api/shipments",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data) + " fetched 1"));

        setShowResults(true);
      //  navigate("/user");
    }

    let toSend = {
      from_name: "Boxinator",
      to_name: firstName,
      zip: zip,
      send_to: "peterhansendev@gmail.com",
      shippingFee: shippingFee,
      weight: weight,
      totalCost: totalCost,
      destination: destination,
      package_type: packageType,
    };

    send("service_ehnr1iu", "template_g4jjcnk", toSend, "MS8kOe4QuwBpWO_Cw")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <div className=" guest flex  h-screen">
      <div className="m-auto flex justify-center">
        <form className="w-full max-w-xl">
          <ShippingFee
            sendShippingFee={setShippingFee}
            sendWeight={setWeight}
            sendTotalCost={setTotalCost}
            sendDestination={setDestination}
            sendPackageType={setPackageType}
          />
          <div className=" flex justify-center md:mr-4 -mb-4 -mx-3 mt-8 md:mx-0 md:-mb-8 md:mt-6">
            <Zip zipValue={setZip} />
          </div>

          <FirstLastName
            firstNameValue={setFirstName}
            lastNameValue={setLastName}
          />

          <Email emailValue={setEmail} emailDataValue={email} />

          <ContactNumber contactNumberValue={setContactNumber} />

          <button
            className=" w-2/5 -mt-1 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            disabled={showResults ? true : false}
            onClick={PostUserInfo}
          >
            {showResults ?  "Order placed" : "Place Order" }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Guest;

/* 
  boxColor: "string",
          boxId: 0,
          created_at: 1,
          destinationCountry: "string",
          packageStatus: "CREATED",
          receiverName: "string",
          shipmentPrice: 0,
          weightKg: 0
          */
