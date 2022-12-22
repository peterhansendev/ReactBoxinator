import React from "react"

const DateOfBirth = ({ dateOfBirthValue, dateOfBirthDataValue }) => {
  const catchDateOfBirth = (e) => {
    dateOfBirthValue(e.target.value);
  };
  
  return (
    <div className="w-full md:w-1/3 px-3  ">
      <div className="relative mb-8">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
       Date Of Birth
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-city1"
        type="date"
      //  required
        value={dateOfBirthDataValue}
        onChange={catchDateOfBirth}
        onKeyPress={(event) => {
          if  (!/[0-9/]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
    </div>
    </div>
  );
};

export default DateOfBirth;
