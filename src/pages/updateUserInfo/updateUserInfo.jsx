import React, { useEffect } from "react";
import { useState } from "react";
import FirstLastName from "../newUser/newUserComponents/firstLastName";
import Email from "../newUser/newUserComponents/email";
import DateOfBirth from "../newUser/newUserComponents/dateOfBirth";
import Country from "../newUser/newUserComponents/country";
import Zip from "../newUser/newUserComponents/zip";
import ContactNumber from "../newUser/newUserComponents/contactNumber";
import OldPassword from "../newUser/newUserComponents/oldPassword";
import "./updateUserInfo.css";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [showResults, setShowResults] = useState(false);
  let navigate = useNavigate();

  const getApiData = async () => {
    const response = await fetch(
      "https://634943afa59874146b1b72d0.mockapi.io/test4/1"
    ).then((response) => response.json());
    console.log(response);
    setFirstName(response.firstName);
    setLastName(response.lastName);
    setEmail(response.email);
    setPassword(response.password);
    setDateOfBirth(response.dateOfBirth);
    setCountry(response.country);
    setZip(response.zip);
    setContactNumber(response.contactNumber);
  };
  useEffect(() => {
    getApiData();
  }, []);

  function PostUserInfo(e) {
    e.preventDefault();

    if (confirmPassword === true) {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          /*
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          country,
          zip,
          contactNumber, */
          dateOfBirth: dateOfBirth,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
          phoneNumber: contactNumber,
          userCountry: country,
          userId: 0,
          userZipCode: zip,
        }),
      };
      fetch(
        "https://boxinator-maven-api.herokuapp.com/api/users/12",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data) + " fetched 2"));

      setShowResults(true);

      //navigate("/user");
    } else {
      window.alert("Please type in current password");
    }
  }

  return (
    <div className="updateUserInfo flex h-screen">
      <div className="m-auto flex  justify-center">
        <form className="w-full max-w-xl">
        <div id="updatedUserInfo">{showResults ?  "User Information Updated" : null}</div>
          <FirstLastName
            firstNameValue={setFirstName}
            firstNameDataValue={firstName}
            lastNameValue={setLastName}
            lastNameDateValue={lastName}
          />

          <Email emailValue={setEmail} emailDataValue={email} />

          <OldPassword
            oldPasswordDataValue={password}
            passwordValue={setPassword}
            passwordDataValue={setConfirmPassword}
          />

          <div className="flex flex-wrap -mx-3  mb-2">
            <DateOfBirth
              dateOfBirthValue={setDateOfBirth}
              dateOfBirthDataValue={dateOfBirth}
            />
            <Country countryValue={setCountry} countryDataValue={country} />
            <Zip zipValue={setZip} zipDataValue={zip} />
          </div>

          <ContactNumber
            contactNumberValue={setContactNumber}
            contactNumberDataValue={contactNumber}
          />

          <button
            className="w-2/5 mb-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={PostUserInfo}
          >
            Update
          </button>
          <button
            className="w-2/5 mb-2 mt-2 ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserInfo;

/*
import React, { useEffect } from "react";
import Password from "../newUser/newUserComponents/password";
import { useState } from "react";
import FirstLastName from "../newUser/newUserComponents/firstLastName";
import Email from "../newUser/newUserComponents/email";
import DateOfBirth from "../newUser/newUserComponents/dateOfBirth";
import Country from "../newUser/newUserComponents/country";
import Zip from "../newUser/newUserComponents/zip";
import ContactNumber from "../newUser/newUserComponents/contactNumber";
import OldPassword from "../newUser/newUserComponents/oldPassword";
import "./updateUserInfo.css";
import { useNavigate } from "react-router-dom";

const UpdateUserInfo = () => {
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: true,
    dateOfBirth: "",
    country: "",
    zip: "",
    contactNumber: "",
  });

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("ok");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  
  let navigate = useNavigate();

  const getApiData = async () => {
    const response = await fetch(
      "https://634943afa59874146b1b72d0.mockapi.io/test4/1"
    ).then((response) => response.json());
    console.log(response);

    setState({
      ...state,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      password: response.password,
      country: response.country,
      dateOfBirth: response.dateOfBirth,
      zip: response.zip,
      contactNumber: response.contactNumber,
    });
 
  };
  useEffect(() => {
    getApiData();
  }, []);

  //console.log(state.email + " firstname");

  function PostUserInfo(e) {
    e.preventDefault();

    if (state.confirmPassword === true) {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          password: state.password,
          dateOfBirth: state.dateOfBirth,
          country: state.country,
          zip: state.zip,
          countactNumber: state.contactNumber,
        }),
      };
      fetch(
        "https://634943afa59874146b1b72d0.mockapi.io/test4/1",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(JSON.stringify(data) + " fetched 2"));
    } else {
      window.alert("Please type in current password");
    }
  }

  function goBack() {
    navigate("/user");
  }
  
  setState({
    ...state,
    firstName: response.firstName,

  return (
    <div className="updateUserInfo flex h-screen">
      <div className="m-auto flex  justify-center">
        <form className="w-full max-w-xl">
          <FirstLastName
            firstNameValue={setState.firstName}
            firstNameDataValue={state.firstName}
            lastNameValue={setState.setLastName}
            lastNameDateValue={state.lastName}
          />

          <Email emailValue={setState.email} emailDataValue={state.email} />

          <OldPassword
            oldPasswordDataValue={state.password}
            passwordValue={setState.password}
            passwordDataValue={setState.confirmPassword}
          />

          <div className="flex flex-wrap -mx-3  mb-2">
            <DateOfBirth
              dateOfBirthValue={setState.dateOfBirth}
              dateOfBirthDataValue={state.dateOfBirth}
            />
            <Country countryValue={setState.country} countryDataValue={state.country} />
            <Zip zipValue={setState.zip} zipDataValue={state.zip} />
          </div>

          <ContactNumber
            contactNumberValue={setState.contactNumber}
            contactNumberDataValue={state.contactNumber}
          />

          <button
            className="w-2/5 mb-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={PostUserInfo}
          >
            Update
          </button>
          <button
            className="w-2/5 mb-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={goBack}
          >
            Go back
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserInfo;

*/
