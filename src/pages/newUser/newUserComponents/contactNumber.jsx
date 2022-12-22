import React from "react"

const ContactNumber = ({contactNumberValue, contactNumberDataValue}) => {

  const catchNumberValue = (e) => {
    contactNumberValue(e.target.value);
  };

  return (
    <div className="-mx-3 mb-6">
      <div className="relative w-full px-3 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Contact Number
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="phone"
          type="tel"
         // required
          placeholder="88888888"
          value={contactNumberDataValue}
          onChange={catchNumberValue}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
};

export default ContactNumber;
