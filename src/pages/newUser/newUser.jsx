import React from "react";
import Password from "./newUserComponents/password";
import { useState } from "react";
import FirstLastName from "./newUserComponents/firstLastName";
import Email from "./newUserComponents/email";
import DateOfBirth from "./newUserComponents/dateOfBirth";
import Country from "./newUserComponents/country";
import Zip from "./newUserComponents/zip";
import ContactNumber from "./newUserComponents/contactNumber";
import "./newUser.css";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  let navigate = useNavigate();

  function PostUserInfo() {
    if (
      firstName &&
      lastName
      /* &&
      email &&
      password &&
      dateOfBirth &&
      country &&
      zip &&
      contactNumber
      */
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          /* firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          country,
          zip,
          contactNumber, */
          created_at: "2022-10-24T08:18:13.868Z",
          dateOfBirth: dateOfBirth,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          phoneNumber: contactNumber,
          userCountry: country,
          userId: 0,
          userZipCode: zip
        }),
      };
      fetch(
        "https://boxinator-maven-api.herokuapp.com/api/users",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data) + " fetched 2"));

      //  navigate("/user");
    }
  }

  return (
    <div className="newuser flex h-screen">
      <div className="m-auto flex justify-center">
        <form className="w-full max-w-xl">
          <FirstLastName
            firstNameValue={setFirstName}
            lastNameValue={setLastName}
          />

          <Email emailValue={setEmail} />

          <Password passwordValue={setPassword} />

          <div className="flex flex-wrap -mx-3  mb-2">
            <DateOfBirth dateOfBirthValue={setDateOfBirth} />
            <Country countryValue={setCountry} />
            <Zip zipValue={setZip} />
          </div>

          <ContactNumber contactNumberValue={setContactNumber} />

          <button
            onClick={PostUserInfo}
            className="w-2/5 mb-2 -mt-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
