import React from "react"

const FirstLastName = ({
  firstNameValue,
  firstNameDataValue,
  lastNameValue,
  lastNameDataValue,
}) => {
  const catchFirstName = (e) => {
    firstNameValue(e.target.value);
  };
  const catchLastName = (e) => {
    lastNameValue(e.target.value);
  };

  //add first and last name to seperate states
  return (
    <div>
      {/* First Name */}
      <div className="flex flex-wrap mt-8 -mx-3 mb-6">
        <div className="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First name
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            onChange={catchFirstName}
            placeholder="Jane"
            value={firstNameDataValue}
            required
            onKeyPress={(event) => {
              if (/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        {/* Last Name */}
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            value={lastNameDataValue}
         //   required
            onChange={catchLastName}
            onKeyPress={(event) => {
              if (/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default FirstLastName;
